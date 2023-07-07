const mongoose = require('mongoose');
const { BALANCE_CHANGED } = require('../enums/subscriptionMessageEnum');
const pubSub = require('../graphql/pubSub');
const jwt = require('jsonwebtoken');
const BetService = require('../objects/BetService');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Balance = require('./balance');
const { AVAILABLE_CURRENCIES } = require('../../constants');
const Bignumber = require('bignumber.js');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      set: email => {
        if (!validator.isEmail(email)) throw new Error('Invalid email.');
        return email.toLowerCase();
      }
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      min: 8,
      max: 32,
      set: v => bcrypt.hashSync(v, 10)
    },
    serverSeedPlain: {
      type: String,
      default: BetService.generateServerSeed()
    }
  },
  { timestamps: true }
);
userSchema.statics.findByToken = async function(token) {
  if (!token) return null;
  const decoded = jwt.verify(token, process.env.SECRET);
  return this.findOne({ _id: decoded.id });
};
// update user's balance by adding/subtracting a value from current balance
userSchema.methods.updateBalance = async function(
  currency,
  amount,
  subtraction = false
) {
  const balance = await Balance.findOne({ currency, user: this._id });
  const currentBalanceBn = new Bignumber(balance.amount);
  const amountBn = new Bignumber(amount);
  let newAmount = (balance.amount = currentBalanceBn.plus(amountBn).toFixed(7));

  if (subtraction) {
    newAmount = currentBalanceBn.plus(amountBn).toFixed(7);
  }
  await this.setBalance(newAmount, currency);
  return balance;
};
// set user balance and call changed signal
userSchema.methods.setBalance = async function(amount, currency) {
  const balance = await Balance.findOne({ currency, user: this._id });
  balance.amount = amount;
  await balance.save();
  await pubSub.publish(BALANCE_CHANGED, { balanceChanged: balance });
};

userSchema.methods.getBalance = async function(currency) {
  if (currency) return Balance.findOne({ currency, user: this._id });
  return Balance.findOne({ user: this._id });
};

userSchema.pre('save', async function(next) {
  if (this.isNew) {
    for (let currency in AVAILABLE_CURRENCIES) {
      await Balance.create({
        user: this._id,
        currency,
        amount: '0.000001'
      });
    }
  }
  next();
});
module.exports = mongoose.model('User', userSchema);

const axios = require('axios');
const Wallet = require('../../models/wallet');
const Deposit = require('../../models/deposit');
const config = require('../../../config/config');
const buildAndSendMail = require('../../utils/mailgun/buildAndSend');
const pubSub = require('../../graphql/pubSub');
const {
  DEPOSIT_HISTORY_CHANGED
} = require('../../enums/subscriptionMessageEnum');

module.exports = app => {
  app.post('/api/btc/unconfirmed-tx', async (req, res, next) => {
    const { outputs, addresses, hash } = req.body;
    console.log(req.body);
    const userWallet = await Wallet.findOne({ address: { $in: addresses } })
      .populate('user')
      .populate('deposits');
    if (!userWallet) {
      throw new Error('Wallet does not exists.');
    }

    let output = {};
    let newAmount = 0;
    for (let i = 0; i < outputs.length; i++) {
      if (outputs[i].addresses.includes(userWallet.address)) {
        output = outputs[i];
        break;
      }
    }

    if (userWallet.user.email) {
      buildAndSendMail(
        'info@mixdice.com',
        userWallet.user.email,
        {
          username: userWallet.user.username,
          address: output.address,
          value: output.value
        },
        'BTC Unconfirmed Transaction'
      );
    }
    const deposit = await Deposit.findOne({ txId: hash });
    if (!deposit) {
      const newDeposit = new Deposit({
        user: userWallet.user,
        address: userWallet.address,
        amount: output.value,
        confirmations: 0,
        txId: hash
      });
      await newDeposit.save();
      userWallet.deposits.push(newDeposit);
      newAmount = output.value / Math.pow(10, 8);
      userWallet.balance += newAmount;
      await userWallet.save();
      await userWallet.user.updateBalance('BTC', newAmount);
      await pubSub.publish(DEPOSIT_HISTORY_CHANGED, {
        depositHistoryChanged: userWallet.deposits.map(deposit => ({
          hash: deposit.txId,
          amount: deposit.amount / Math.pow(10, 8),
          status: deposit.confirmations > 2,
          time: deposit.createdAt
        }))
      });
    }
    return res.status(200);
  });

  app.post('/api/btc/confirmed-tx', async (req, res, next) => {
    const { outputs, addresses, hash } = req.body;
    const deposit = await Deposit.findOne({ txId: hash }).populate('user');
    if (!deposit) {
      throw new Error('Wallet does not exists.');
    }

    let output = {};
    for (let i = 0; i < outputs.length; i++) {
      if (outputs[i].address === deposit.address) {
        output = outputs[i];
        break;
      }
    }

    deposit.confirmations += 1;
    await deposit.save();
    if (deposit.user.email) {
      buildAndSendMail(
        'info@mixdice.com',
        deposit.user.email,
        {
          address: output.address,
          value: output.value
        },
        'BTC Confirmed Transaction'
      );
    }
    return res.status(200);
  });
};

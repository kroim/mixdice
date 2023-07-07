const mongoose = require('mongoose');
const { AVAILABLE_CURRENCIES } = require('../../constants');

const betSchema = new mongoose.Schema(
  {
    under: {
      type: Boolean
    },
    targetValue: {
      type: Number,
      min: 0,
      max: 100
    },
    isUnder: {
      type: Boolean
    },
    betAmount: {
      type: String
    },
    result: {
      type: Number,
      min: 0,
      max: 100
    },
    clientSeed: {
      type: String
    },
    serverSeedPlain: {
      type: String
    },
    serverSeed: {
      type: String
    },
    nonce: {
      type: String
    },
    transactionAmount: {
      type: String
    },
    currency: {
      type: String,
      enum: Object.values(AVAILABLE_CURRENCIES),
      default: AVAILABLE_CURRENCIES.BTC
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: String, get: val => new Date(val).getTime() }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bet', betSchema);

const mongoose = require('mongoose');

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
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bet', betSchema);

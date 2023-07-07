const mongoose = require('mongoose');
const { AVAILABLE_CURRENCIES } = require('../../constants');

const balanceSchema = new mongoose.Schema(
  {
    amount: {
      type: String
    },
    currency: {
      type: String,
      enum: Object.values(AVAILABLE_CURRENCIES)
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: String, get: val => new Date(val).getTime() }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Balance', balanceSchema);

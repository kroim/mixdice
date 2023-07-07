const mongoose = require('mongoose');
const { Schema } = mongoose;

const depositSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    address: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    confirmations: {
      type: Number
    },
    currency: {
      type: String,
      required: true,
      default: 'BTC'
    },
    txId: {
      type: String,
      required: true
    },
    createdAt: { type: String, get: val => new Date(val).getTime() }
  },
  { timestamps: true }
);
module.exports = mongoose.model('Deposit', depositSchema);

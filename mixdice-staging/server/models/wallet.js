const mongoose = require('mongoose');
const { Schema } = mongoose;

const walletSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    address: {
      type: String,
      required: true
    },
    private: {
      type: String,
      required: true
    },
    public: {
      type: String,
      required: true
    },
    wif: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      default: 0,
      min: 0
    },
    deposits: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Deposit'
      }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model('Wallet', walletSchema);

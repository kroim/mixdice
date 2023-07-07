const axios = require('axios');
const { withFilter } = require('graphql-subscriptions');
const Wallet = require('../../../models/wallet');
const config = require('../../../../config/config');
const startBTCWebhookHandler = require('../../../utils/startWebhookHandler');
const {
  DEPOSIT_HISTORY_CHANGED
} = require('../../../enums/subscriptionMessageEnum');
const pubSub = require('../../pubSub');

const getWallet = async (obj, args, cx) => {
  const { user } = cx;
  let userWallet = await Wallet.findOne({ user });
  try {
    if (!userWallet) {
      let wallet;
      try {
        wallet = await axios.post(
          'https://api.blockcypher.com/v1/btc/test3/addrs'
        );
      } catch (err) {
        throw new Error(`Failed to generate Address: ${err.message}`);
      }
      userWallet = new Wallet({ user, ...wallet.data, deposits: [] });
      await userWallet.save();

      // Start webhook handler
      startBTCWebhookHandler(wallet.data.address, 'unconfirmed-tx');
      startBTCWebhookHandler(wallet.data.address, 'confirmed-tx');
    } else {
      const wallet = await axios.get(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${userWallet.address}/balance`
      );
      userWallet.balance = wallet.data.balance / Math.pow(10, 8);
      await userWallet.save();
    }

    return { ...userWallet._doc };
  } catch (err) {
    throw err;
  }
};

const depositHistory = async (obj, args, cx) => {
  const { user } = cx;
  let userWallet = await Wallet.findOne({ user }).populate('deposits');

  if (!userWallet) {
    throw new Error("User's wallet does not exist.");
  }

  return userWallet.deposits.map(deposit => ({
    hash: deposit.txId,
    amount: deposit.amount / Math.pow(10, 8),
    status: deposit.confirmations > 2,
    time: deposit.createdAt
  }));
};

const depositHistoryChanged = {
  subscribe: withFilter(
    () => pubSub.asyncIterator(DEPOSIT_HISTORY_CHANGED),
    (payload, { input }) => {
      return true;
    }
  )
};
module.exports = {
  mutation: { getWallet },
  query: { depositHistory },
  subscription: { depositHistoryChanged }
};

const axios = require('axios');
const Wallet = require('../../../models/wallet');
const config = require('../../../../config/config');
const startBTCWebhookHandler = require('../../../utils/startWebhookHandler');

const getWallet = async (obj, args, cx) => {
  const { user } = cx;
  let userWallet = await Wallet.findOne({ user });
  try {
    if (!userWallet) {
      const wallet = await axios.post(`${config.BITCORE_API_URL}/addrs`);
      userWallet = new Wallet({ user, ...wallet.data });
      userWallet.save();

      // Start webhook handler
      startBTCWebhookHandler(wallet.data.address, 'unconfirmed-tx');
      startBTCWebhookHandler(wallet.data.address, 'confirmed-tx');
    } else {
      const wallet = await axios.get(
        `${config.BITCORE_API_URL}/addrs/${userWallet.address}/balance`
      );
      userWallet.balance = wallet.data.balance / Math.pow(10, 8);
      userWallet.save();
    }

    return { ...userWallet._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  mutation: { getWallet }
};

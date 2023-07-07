const axios = require('axios');
const Wallet = require('../../models/wallet');
const config = require('../../../config/config');

module.exports = app => {
  app.post('/api/btc/unconfirmed-tx', (req, res, next) => {
    console.log(req);
  });

  app.post('/api/btc/confirmed-tx', async (req, res, next) => {
    const { outputs } = req.body;
    const { value, addresses } = outputs[0];

    const userWallet = await Wallet.findOne({ address: addresses[0] });
    if (!userWallet) {
      throw new Error('Wallet does not exists.');
    }

    const wallet = await axios.get(
      `${config.BITCORE_API_URL}/addrs/${addresses[0]}/balance`
    );
    userWallet.balance = wallet.data.balance / Math.pow(10, 8);
    userWallet.save();
    console.log('DONE!');
    return res.status(200);
  });
};

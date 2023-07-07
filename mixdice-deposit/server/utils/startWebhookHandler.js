const axios = require('axios');
const config = require('../../config/config');

async function startBTCWebhookHandler(address, event) {
  try {
    let webhook = {
      event,
      address,
      url: `${config.APP_URL}/api/btc/${event}`
    };
    let url = `${config.BITCORE_API_URL}/hooks?token=${config.BITCORE_TOKEN}`;
    const res = await axios.post(url, JSON.stringify(webhook));
    console.log('WEB HOOKS', res);
  } catch (err) {
    throw err;
  }
}

module.exports = startBTCWebhookHandler;

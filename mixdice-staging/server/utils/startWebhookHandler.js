const axios = require('axios');
const config = require('../../config/config');
const BITCORE_TOKEN = '8ee7308da50e47508a67752537249626';
const APP_URL = 'http://116.203.108.139:8080';

async function startBTCWebhookHandler(address, event) {
  try {
    let webhook = {
      event,
      address,
      url: `${APP_URL}/api/btc/${event}`
    };
    let url = `https://api.blockcypher.com/v1/btc/test3/hooks?token=${BITCORE_TOKEN}`;
    const res = await axios.post(url, JSON.stringify(webhook));
    console.log('WEB HOOKS', res);
  } catch (err) {
    throw err;
  }
}

module.exports = startBTCWebhookHandler;

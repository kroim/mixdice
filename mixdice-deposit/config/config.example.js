// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
  db: 'mongodb://username:password@url:port/db',
  db_dev: 'mongodb://url:port/db',
  API_URL: 'http://serverurl',
  DEV_API_URL: 'http://localhost:8080',
  BITCORE_API_URL: 'https://api.blockcypher.com/v1/btc/test3/addrs',
  BITCORE_TOKEN: '8ee7308da50e47508a67752537249626',
  APP_URL: 'https://3d8ce95c.io',
  MAILGUN_API_KEY: 'YOUR_MAILGUN_API_KEY',
  MAILGUN_DOMAIN_NAME: 'YOUR_MAILGUN_DOMAIN_NAME'
};

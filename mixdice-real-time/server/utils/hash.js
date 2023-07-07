var shajs = require('sha.js');

const hashText = text =>
  shajs('sha256')
    .update(text)
    .digest('hex');

module.exports = { hashText };

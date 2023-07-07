const crypto = require('crypto');
const { hashText } = require('../utils/hash');

module.exports = class {
  constructor(clientSeed, nonce, serverSeedPlain = null) {
    this.serverSeedPlain =
      serverSeedPlain || crypto.randomBytes(256).toString('hex');
    this.serverSeed = hashText(this.serverSeedPlain);
    this.clientSeed = hashText(clientSeed);
    this.nonce = nonce;
  }
  getServerSeedPlain() {
    return this.serverSeedPlain;
  }
  getServerSeed() {
    return this.serverSeed;
  }
  getClientSeed() {
    return this.clientSeed;
  }
  getNonce() {
    return this.nonce;
  }
  getHash() {
    return hashText(
      this.constructor.composeHash(this.serverSeed, this.clientSeed, this.nonce)
    );
  }
  getResult() {
    return this.constructor.hashToRandom(this.getHash());
  }
  static composeHash(serverSeed, clientSeed, nonce) {
    return serverSeed + clientSeed + '-' + nonce;
  }
  static hashToRandom(hash) {
    return Math.round((parseInt(hash.substring(0, 5), 16) % 10 ** 4) / 100);
  }
};

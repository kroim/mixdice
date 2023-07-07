const crypto = require('crypto');
const { BigNumber } = require('bignumber.js');

const { hashText } = require('../utils/hash');
const {
  calculateWinChance,
  calculatePayoutFromWinChance,
  calculateProfitOnWin
} = require('../../shared/math');

module.exports = class {
  constructor(clientSeed, nonce, serverSeedPlain = null) {
    this.serverSeedPlain =
      serverSeedPlain || this.constructor.generateServerSeed();
    this.serverSeed = hashText(this.serverSeedPlain);
    this.clientSeed = hashText(clientSeed);
    this.nonce = nonce;
  }
  static generateServerSeed() {
    return crypto.randomBytes(256).toString('hex');
  }
  static hashText(v) {
    return hashText(v);
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
    return this.constructor.hashText(
      this.constructor.composeHash(this.serverSeed, this.clientSeed, this.nonce)
    );
  }
  getResult() {
    return this.constructor.hashToRandom(this.getHash());
  }
  getTransactionAmount(betAmount, targetValue, isUnder) {
    const result = this.getResult();
    const betAmountString = BigNumber(betAmount).toFixed(8);
    const profit = calculateProfitOnWin(
      betAmount,
      calculatePayoutFromWinChance(calculateWinChance(targetValue, isUnder))
    );
    if (!isUnder) {
      if (result < targetValue) {
        return `-${betAmountString}`;
      } else {
        // won!
        return profit;
      }
    } else {
      if (result < targetValue) {
        // won!
        return profit;
      } else {
        return `-${betAmountString}`;
      }
    }
  }
  static composeHash(serverSeed, clientSeed, nonce) {
    return serverSeed + clientSeed + '-' + nonce;
  }
  static hashToRandom(hash, withDecimals = false) {
    const result = (parseInt(hash.substring(0, 5), 16) % 10 ** 4) / 100;
    if (!withDecimals) return Math.round(result);
    return result;
  }
};

const { BigNumber } = require('bignumber.js');
const { HOUSE_EDGE } = require('../constants');

const calculatePayoutFromWinChance = (winChance, houseEdge = HOUSE_EDGE) => {
  return parseFloat(((100 - houseEdge) / winChance).toFixed(2));
};

const calculateWinChanceFromPayout = payout => {
  return parseFloat((100 / payout).toFixed(2));
};

const calculatePayoutFromProfit = (profit, betAmount) => {
  return BigNumber(profit)
    .dividedBy(betAmount)
    .minus(betAmount);
};

const calculateWinChance = (targetValue, isUnder) =>
  isUnder ? targetValue : 100 - targetValue;

const calculateProfitOnWin = (betAmount, payout) =>
  BigNumber(betAmount)
    .multipliedBy(payout - 1)
    .toFixed(7);

module.exports = {
  calculatePayoutFromWinChance,
  calculateWinChanceFromPayout,
  calculatePayoutFromProfit,
  calculateWinChance,
  calculateProfitOnWin
};

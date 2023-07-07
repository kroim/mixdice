import BigNumber from 'bignumber.js';
import moment from 'moment';
import {
  calculatePayoutFromWinChance,
  calculateWinChance,
  calculateProfitOnWin
} from 'shared/math.js';

export default bet => ({
  ...bet,
  _id: bet._id.substring(bet._id.length - 10, bet._id.length),
  wagered: BigNumber(bet.betAmount),
  payout: calculatePayoutFromWinChance(
    calculateWinChance(bet.targetValue, bet.isUnder)
  ),
  game: bet.isUnder ? 100 - bet.targetValue : bet.targetValue,
  roll: bet.result,
  createdAt: moment.unix(bet.createdAt).toDate(),
  profit: BigNumber(bet.transactionAmount)
});

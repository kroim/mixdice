import { withCreateUser, withGetName } from './Auth';
import { withGetWallet } from './Deposit';
import { withBetHistory, withPlaceBet, withMyBetPlaced } from './Bet';
import { withBalance } from './Balance';

export default {
  withCreateUser,
  withGetName,
  withGetWallet,
  withBetHistory,
  withPlaceBet,
  withMyBetPlaced,
  withBalance
};

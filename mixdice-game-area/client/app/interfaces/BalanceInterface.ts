import BigNumber from 'bignumber.js';
import currencyEnum from 'enums/currencyEnum';

interface IBalance {
  amount: BigNumber;
  currency: currencyEnum;
}

export default IBalance;

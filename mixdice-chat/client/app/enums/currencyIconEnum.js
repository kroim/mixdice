import CurrencyEnum from './currencyEnum';
import Btc from 'assets/svg/crypto/btc-normal.svg';
import Eth from 'assets/svg/crypto/eth.svg';
import Ltc from 'assets/svg/crypto/ltc.svg';
import Neo from 'assets/svg/crypto/neo.svg';
import Xrp from 'assets/svg/crypto/xrp.svg';

export default {
  [CurrencyEnum.BTC]: Btc,
  [CurrencyEnum.ETH]: Eth,
  [CurrencyEnum.LTC]: Ltc,
  [CurrencyEnum.XRP]: Xrp,
  [CurrencyEnum.NEO]: Neo
};

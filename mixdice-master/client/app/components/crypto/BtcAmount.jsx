import React from 'react';
import PropTypes from 'prop-types';
import Btc from 'assets/svg/crypto/btc.svg';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';

const BtcProfit = ({ amount, size, isTypeProfit, ...props }) => {
  let amountValue = amount.toFixed(7);
  let isAmountPositive = false;
  if (isTypeProfit) {
    if (amount.gt(0)) isAmountPositive = true;
    amountValue = (isAmountPositive ? '+' : '') + amount.toFixed(7);
  }
  return (
    <span
      className={classNames('btc-amount', props.className, {
        'btc-amount--small': size === 'small',
        'btc-amount--profit': isTypeProfit
      })}
    >
      <Btc className={classNames('btc-amount btc-amount__icon')} />
      <span
        className={classNames('btc-amount btc-amount__amount', {
          'btc-amount__amount--positive': isTypeProfit && isAmountPositive,
          'btc-amount__amount--negative': isTypeProfit && !isAmountPositive
        })}
      >
        {amountValue}
      </span>
    </span>
  );
};

BtcProfit.propTypes = {
  amount: PropTypes.instanceOf(BigNumber).isRequired,
  size: PropTypes.oneOf(['small']),
  isTypeProfit: PropTypes.bool
};

BtcProfit.defaultProps = {
  size: null,
  isTypeProfit: false
};
export default BtcProfit;

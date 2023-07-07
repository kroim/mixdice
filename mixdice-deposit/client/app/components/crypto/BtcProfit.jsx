import React from 'react';
import PropTypes from 'prop-types';
import Btc from '../../../public/assets/svg/crypto/btc.svg';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';

const BtcProfit = ({ amount, displayLabel }) => (
  <span className={classNames('btc-profit')}>
    {displayLabel && (
      <strong className={classNames('btc-profit__label')}>Profit: </strong>
    )}
    <Btc className={classNames('btc-profit__icon')} />
    <span className={classNames('btc-profit__amount')}>
      {amount.toFixed(8)}
    </span>
  </span>
);
BtcProfit.propTypes = {
  amount: PropTypes.instanceOf(BigNumber).isRequired,
  displayLabel: PropTypes.bool
};
BtcProfit.defaultProps = {
  displayLabel: false
};

export default BtcProfit;

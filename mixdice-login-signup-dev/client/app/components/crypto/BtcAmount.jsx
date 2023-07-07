import React from 'react';
import PropTypes from 'prop-types';
import Btc from '../../../public/assets/svg/crypto/btc.svg';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';

const BtcProfit = ({ amount, ...props }) => (
  <span className={classNames('btc-amount', props.className)}>
    <Btc className={classNames('btc-amount__icon')} />
    <span className={classNames('btc-amount__amount')}>
      {amount.toFixed(7)}
    </span>
  </span>
);

BtcProfit.propTypes = {
  amount: PropTypes.instanceOf(BigNumber).isRequired
};

export default BtcProfit;

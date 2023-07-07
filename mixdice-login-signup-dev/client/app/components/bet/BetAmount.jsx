import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import BtcAmount from '../crypto/BtcAmount';
import BigNumber from 'bignumber.js';

const BetAmount = ({ amount, onChange, minAmount }) => {
  function handleMinClick() {
    onChange(minAmount);
  }
  function handleHalfClick() {
    if (amount / 2 >= minAmount) {
      onChange(amount.dividedBy(2));
    }
  }
  function handleDoubleClick() {
    onChange(amount.times(2));
  }
  return (
    <div className={classNames('bet-amount')}>
      <span className={classNames('bet-amount__title')}>Bet Amount</span>
      <BtcAmount amount={amount} className={classNames('bet-amount__amount')} />
      <div className={classNames('bet-amount__buttons-container')}>
        <Button
          onClick={handleMinClick}
          color="primary"
          className={classNames('bet-amount__button')}
        >
          MIN
        </Button>
        <Button
          onClick={handleHalfClick}
          color="primary"
          className={classNames('bet-amount__button')}
        >
          1/2
        </Button>
        <Button
          onClick={handleDoubleClick}
          color="primary"
          className={classNames('bet-amount__button')}
        >
          2x
        </Button>
      </div>
    </div>
  );
};

BetAmount.propTypes = {
  onChange: PropTypes.func,
  amount: PropTypes.instanceOf(BigNumber).isRequired,
  minAmount: PropTypes.instanceOf(BigNumber)
};
BetAmount.defaultProps = {
  minAmount: BigNumber(0.0000001)
};
export default BetAmount;

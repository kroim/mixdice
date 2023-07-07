import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';
import Input from 'app/components/bet/BetAmountInput.tsx';
import ErrorTooltip from 'app/components/form/ErrorTooltip.tsx';

const BetAmount = ({
  balance,
  amount,
  maxAmount,
  onChange,
  minAmount,
  errorText
}) => {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    if (BigNumber(amount).gt(maxAmount)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [amount]);
  function handleOnChange(value) {
    onChange(value);
  }
  function handleMinClick() {
    handleOnChange(BigNumber(minAmount).toFixed(7));
  }
  function handleHalfClick() {
    if (amount / 2 >= minAmount) {
      handleOnChange(
        BigNumber(amount)
          .dividedBy(2)
          .toFixed(7)
      );
    }
  }
  function handleDoubleClick() {
    handleOnChange(
      BigNumber(amount)
        .times(2)
        .toFixed(7)
    );
  }
  return (
    <div
      className={classNames('bet-amount', { 'bet-amount--error': hasError })}
    >
      <div className={classNames('bet-amount__container')}>
        <div className={classNames('bet-amount__content')}>
          <ErrorTooltip errorText={hasError && errorText && !balance.isZero()}>
            <div>
              <div className={classNames('bet-amount__title')}>Bet Amount</div>
              <Input
                // type="number"
                btcAmount
                onChange={handleOnChange}
                value={amount}
                className={classNames('bet-amount__amount-input')}
              />
            </div>
          </ErrorTooltip>
        </div>
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
    </div>
  );
};

BetAmount.propTypes = {
  onChange: PropTypes.func,
  amount: PropTypes.string.isRequired,
  minAmount: PropTypes.instanceOf(BigNumber),
  maxAmount: PropTypes.instanceOf(BigNumber),
  balance: PropTypes.instanceOf(BigNumber),
  errorText: PropTypes.string
};
BetAmount.defaultProps = {
  minAmount: BigNumber(0.0000001),
  errorText: ''
};
export default BetAmount;

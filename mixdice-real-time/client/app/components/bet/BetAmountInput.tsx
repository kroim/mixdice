import React from 'react';
import { Input as BInput, FormFeedback } from 'reactstrap';
import Btc from 'assets/svg/crypto/btc.svg';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';

interface InputProps {
  onChange(value: any): any;
  value: any;
  btcAmount: boolean;
  errorText: string;
  className: string;
  type: string;
}

const BetAmountInput: React.FC<InputProps> = ({
  onChange,
  value,
  btcAmount,
  errorText,
  type,
  className,
  ...props
}) => {
  function handleOnChange(e) {
    const value = e.target.value;
    // if (btcAmount) {
    //   onChange(BigNumber(value).toFixed(7));
    // } else {
    //   onChange(value);
    // }
    onChange(value);
    console.log(value);
  }
  return (
    <div className={classNames('input-container')}>
      {btcAmount && <Btc />}
      <BInput
        type={type}
        onChange={handleOnChange}
        invalid={errorText}
        value={value}
        className={classNames({ 'input-btc-amount': !!btcAmount }, className)}
        {...props}
      />
      {errorText && <FormFeedback>{errorText}</FormFeedback>}
    </div>
  );
};

export default BetAmountInput;

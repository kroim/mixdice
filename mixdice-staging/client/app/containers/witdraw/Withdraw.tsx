import React, { useState, useEffect } from 'react';
import BalanceDropdown from 'app/components/crypto/balanceDropdown/BalanceDropdown';
import IBalance from 'interfaces/BalanceInterface';
import classNames from 'classnames';
import currencyEnum from 'enums/currencyEnum';
import Input from 'app/components/form/Input';
import { Button } from 'reactstrap';
import cryptaddress from 'cryptaddress-validator';
import BigNumber from 'bignumber.js';
import constants from '../../../../constants.js';
interface WithdrawProps {
  balance: IBalance[];
}

const Withdraw: React.FC<WithdrawProps> = ({ balance }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyEnum.BTC);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  function validate() {
    if (!address) {
      setAddressError(`Please enter a ${selectedCurrency} address!`);
    } else if (!cryptaddress(selectedCurrency).test(address)) {
      setAddressError(`Not a valid ${selectedCurrency} address!`);
    } else {
      setAddressError('');
    }
    const amountBn = new BigNumber(amount);
    if (!amount) {
      setAmountError('Please enter an amount!');
    } else if (amountBn.isLessThan(constants.MIN_WITHDRAW_AMOUNT)) {
      setAmountError(
        `Minimum withdraw amount is ${constants.MIN_WITHDRAW_AMOUNT}`
      );
    } else {
      setAmountError('');
    }
  }
  function handleWithdraw() {
    validate();
    alert(selectedCurrency + ' ' + address + ' ' + amount);
  }
  return (
    <div className={classNames('withdraw')}>
      <BalanceDropdown
        selectedCurrency={selectedCurrency}
        balance={balance}
        onSelect={setSelectedCurrency}
      />
      <Input
        formGroupClassName={classNames('withdraw__form-control')}
        labelLight
        error={addressError}
        label="Bitcoin Address"
        placeholder="Enter address"
        value={address}
        onChange={setAddress}
      />
      <Input
        type="number"
        value={amount}
        error={amountError}
        onChange={setAmount}
        formGroupClassName={classNames('withdraw__form-control')}
        labelLight
        label="Enter Amount (min of 0.002 BTC)"
        placeholder="Enter amount"
      />
      <h6 className={classNames('withdraw__instructions-header')}>
        Instructions:
      </h6>
      <ol className={classNames('withdraw__instructions')}>
        <li>
          Please double check the external address before submission of the
          withdraw request.
        </li>
        <br />
        <li>
          Your withdrawal will also have 0.000005 BTC subtracted to cover the
          transactoin fee.
        </li>
      </ol>
      <Button
        onClick={handleWithdraw}
        className={classNames('withdraw__button')}
      >
        Withdraw
      </Button>
      <a className={classNames('withdraw__confirm-link')} href="#">
        Confirm your Email to Withdraw
      </a>
    </div>
  );
};

export default Withdraw;

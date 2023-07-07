import React, { useState } from 'react';
import classNames from 'classnames';
import currencyEnum from 'enums/currencyEnum';
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import IBalance from 'interfaces/BalanceInterface';
import currencyIconEnum from 'enums/currencyIconEnum';
import BalanceDropdownItem from 'app/components/crypto/balanceDropdown/BalanceDropdownItem';
import uniqid from 'uniqid';
import CaretDown from 'assets/svg/caret-down.svg';

interface BalanceDropdownProps {
  balance: IBalance[];
  onSelect: (currency: currencyEnum) => any;
  label?: string;
  selectedCurrency: currencyEnum;
}

const BalanceDropdown: React.FC<BalanceDropdownProps> = ({
  balance,
  selectedCurrency,
  label = 'Select coin',
  onSelect
}) => {
  const [isOpened, setIsOpened] = useState(false);
  function handleToggle() {
    setIsOpened(!isOpened);
  }
  const selectedCurrencyObject = balance.find(
    e => e.currency === selectedCurrency
  );
  const SelectedCurrencyIcon =
    currencyIconEnum[selectedCurrencyObject.currency];

  return (
    <>
      <div className={classNames('balance-dropdown')}>
        {!!label && (
          <label className={classNames('balance-dropdown__label')}>
            {label}
          </label>
        )}
        <ButtonDropdown
          direction="down"
          isOpen={isOpened}
          toggle={handleToggle}
          className={classNames('balance-dropdown__button-dropdown')}
        >
          <DropdownToggle className={classNames('balance-dropdown__button')}>
            <SelectedCurrencyIcon
              className={classNames('balance-dropdown__selected-icon')}
            />
            {selectedCurrencyObject.amount.toFixed(8)}
            <CaretDown className={classNames('balance-dropdown__caret')} />
          </DropdownToggle>
          <DropdownMenu>
            {balance.map(e => (
              <BalanceDropdownItem
                key={uniqid()}
                balanceItem={e}
                onClick={onSelect}
              />
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </>
  );
};

export default BalanceDropdown;

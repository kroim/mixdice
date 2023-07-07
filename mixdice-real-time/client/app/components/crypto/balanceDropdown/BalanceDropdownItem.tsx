import React from 'react';
import classNames from 'classnames';
import currencyIconEnum from 'enums/currencyIconEnum';
import IBalance from 'interfaces/BalanceInterface';
import currencyEnum from 'enums/currencyEnum';
import uniqid from 'uniqid';
import { DropdownItem } from 'reactstrap';

interface BalanceDropdownItemProps {
  balanceItem: IBalance;
  onClick: (currency: currencyEnum) => any;
}

const BalanceDropdownItem: React.FC<BalanceDropdownItemProps> = ({
  balanceItem,
  onClick
}) => {
  const Icon = currencyIconEnum[balanceItem.currency];
  return (
    <DropdownItem key={uniqid()} onClick={() => onClick(balanceItem.currency)}>
      <Icon className={classNames('balance-dropdown__item-icon')} />
      {balanceItem.amount.toFixed(7)}
    </DropdownItem>
  );
};

export default BalanceDropdownItem;

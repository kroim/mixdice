import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Nav
} from 'reactstrap';
import uniqid from 'uniqid';
import currencyEnum from 'enums/currencyEnum';
import currencyIconEnum from 'enums/currencyIconEnum';
import BtcAmount from '../crypto/BtcAmount';
import BigNumber from 'bignumber.js';
console.log(currencyEnum, currencyIconEnum);

const NavbarBalance = ({ balance }) => (
  <Nav className="ml-auto mr-auto">
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <BtcAmount
          size={'normal'}
          isTypeProfit={false}
          amount={balance.find(e => e.currency === currencyEnum.BTC).amount}
        />
      </DropdownToggle>
      <DropdownMenu
        className={classNames('nav__dropdown-balance__container')}
        right
      >
        <div className={classNames('nav__dropdown-balance')}>
          {balance
            .filter(e => e.currency !== currencyEnum.BTC)
            .map(({ amount, currency }) => {
              const Icon = currencyIconEnum[currency];
              return (
                <DropdownItem key={uniqid()}>
                  <>
                    <Icon className={classNames('mr-2')} />
                    {amount.toFixed(7)}
                  </>
                </DropdownItem>
              );
            })}
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
);

NavbarBalance.propTypes = {
  balance: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.instanceOf(BigNumber).isRequired
    })
  )
};
export default NavbarBalance;

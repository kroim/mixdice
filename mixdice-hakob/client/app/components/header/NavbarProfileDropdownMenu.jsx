import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import Wallet from '../../../public/assets/svg/wallet.svg';
import Account from '../../../public/assets/svg/account.svg';
import Affiliate from '../../../public/assets/svg/affiliate.svg';
import Fair from '../../../public/assets/svg/fair.svg';
import Faucet from '../../../public/assets/svg/faucet.svg';
import Transaction from '../../../public/assets/svg/transaction.svg';
import Settings from '../../../public/assets/svg/settings.svg';
import Logout from '../../../public/assets/svg/logout.svg';

const NavbarProfileDropdownMenu = props => (
  <DropdownMenu {...props} right>
    <DropdownItem>
      <Wallet /> My Account
    </DropdownItem>
    <DropdownItem>
      <Account /> Affiliate
    </DropdownItem>
    <DropdownItem>
      <Affiliate /> Provably Fair
    </DropdownItem>
    <DropdownItem>
      <Fair /> Cashier
    </DropdownItem>
    <DropdownItem>
      <Faucet /> Faucet
    </DropdownItem>
    <DropdownItem>
      <Transaction /> Transactions
    </DropdownItem>
    <DropdownItem>
      <Settings /> Settings
    </DropdownItem>
    <DropdownItem>
      <Logout /> Logout
    </DropdownItem>
  </DropdownMenu>
);

NavbarProfileDropdownMenu.propTypes = {};

export default NavbarProfileDropdownMenu;

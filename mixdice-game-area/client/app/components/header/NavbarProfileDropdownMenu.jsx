import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import Wallet from 'assets/svg/wallet.svg';
import Account from 'assets/svg/account.svg';
import Affiliate from 'assets/svg/affiliate.svg';
import Fair from 'assets/svg/fair.svg';
import Faucet from 'assets/svg/faucet.svg';
import Transaction from 'assets/svg/transaction.svg';
import Settings from 'assets/svg/settings.svg';
import Logout from 'assets/svg/logout.svg';

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
    <Link to="/settings">
      <DropdownItem>
        <Settings /> Settings
      </DropdownItem>
    </Link>

    <DropdownItem>
      <Logout /> Logout
    </DropdownItem>
  </DropdownMenu>
);

NavbarProfileDropdownMenu.propTypes = {};

export default NavbarProfileDropdownMenu;

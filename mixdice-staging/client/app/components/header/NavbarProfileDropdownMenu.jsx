import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import Wallet from 'assets/svg/wallet.svg';
import Account from 'assets/svg/account.svg';
import Affiliate from 'assets/svg/affiliate.svg';
import Fair from 'assets/svg/fair.svg';
import Faucet from 'assets/svg/faucet.svg';
import Transaction from 'assets/svg/transaction.svg';
import Settings from 'assets/svg/settings.svg';
import Logout from 'assets/svg/logout.svg';
import { Auth } from 'app/utils';
import DropdownLinkItem from 'app/components/misc/DropdownLinkItem';

const NavbarProfileDropdownMenu = props => (
  <DropdownMenu {...props} right style={{ ...props.style, minWidth: 140 }}>
    <DropdownLinkItem to="/admin">
      <Affiliate /> Admin Dashboard
    </DropdownLinkItem>
    <DropdownItem>
      <Wallet /> My Account
    </DropdownItem>
    <DropdownItem>
      <Account /> Affiliate
    </DropdownItem>
    <DropdownLinkItem to="/provably-fair">
      <Affiliate /> Provably Fair
    </DropdownLinkItem>
    <DropdownItem>
      <Fair /> Cashier
    </DropdownItem>
    <DropdownItem>
      <Faucet /> Faucet
    </DropdownItem>
    <DropdownLinkItem to="/transactions/bets">
      <Transaction /> Transactions
    </DropdownLinkItem>
    <DropdownLinkItem to="/settings">
      <Settings /> Settings
    </DropdownLinkItem>

    <DropdownItem
      onClick={() => {
        Auth.logout();
        props.history.push('/login');
      }}
    >
      <Logout /> Logout
    </DropdownItem>
  </DropdownMenu>
);

NavbarProfileDropdownMenu.propTypes = {};

export default withRouter(NavbarProfileDropdownMenu);

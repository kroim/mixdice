import React from 'react';
import PropTypes from 'prop-types';
import NavbarProfileMenu from './NavbarProfileMenu';
import Wallet from 'assets/svg/wallet.svg';
import Withdraw from 'assets/svg/withdraw.svg';
import classNames from 'classnames';

import { Button, Nav, NavItem } from 'reactstrap';

const NavbarContent = ({ className, email, ...props }) => (
  <>
    <Nav {...props} navbar className={classNames('ml-auto', props.className)}>
      <NavItem>
        <Button size="sm" color="primary">
          <Wallet />
          Deposit
        </Button>
      </NavItem>
      <NavItem>
        <Button size="sm" color="primary">
          <Withdraw />
          Withdraw
        </Button>
      </NavItem>
      <NavbarProfileMenu email={email} />
    </Nav>
  </>
);

NavbarContent.propTypes = {
  email: PropTypes.string.isRequired,
  className: PropTypes.string
};
NavbarContent.defaultProps = {
  className: null
};
export default NavbarContent;

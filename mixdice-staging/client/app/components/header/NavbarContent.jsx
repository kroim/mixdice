import React from 'react';
import PropTypes from 'prop-types';
import NavbarProfileMenu from './NavbarProfileMenu';
import Wallet from 'assets/svg/wallet.svg';
import Withdraw from 'assets/svg/withdraw.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem } from 'reactstrap';

const NavbarContent = ({ className, email, ...props }) => (
  <>
    <Nav {...props} navbar className={classNames('ml-auto', props.className)}>
      <NavItem>
        <Link to="/deposit">
          <Button color="primary" className={classNames('navbar__button')}>
            <Wallet />
            Deposit
          </Button>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/withdraw">
          <Button color="primary" className={classNames('navbar__button')}>
            <Withdraw />
            Withdraw
          </Button>
        </Link>
      </NavItem>
      <NavbarProfileMenu email={email} />
    </Nav>
  </>
);

NavbarContent.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string
};
NavbarContent.defaultProps = {
  className: null
};
export default NavbarContent;

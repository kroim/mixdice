import React from 'react';
import PropTypes from 'prop-types';
import NavbarBrand from './NavbarBrand.jsx';
import NavbarContent from './NavbarContent.jsx';
import { Collapse, Navbar } from 'reactstrap';
import NavbarBalance from './NavbarBalance.tsx';
import NavbarToggle from './NavbarToggle';
import classNames from 'classnames';
import NavbarProfileDropdownMenu from './NavbarProfileDropdownMenu';
import BigNumber from 'bignumber.js';

class Header extends React.Component {
  state = {
    isOpen: false
  };
  toggleScroll = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  };
  toggle = () =>
    this.setState(
      {
        isOpen: !this.state.isOpen
      },
      this.toggleScroll
    );

  render() {
    const { isOpen } = this.state;
    const { balance, email } = this.props;
    return (
      <Navbar expand="md">
        <NavbarBrand isFullLogo={isOpen} />
        {!isOpen && <NavbarBalance balance={balance} />}
        <NavbarToggle isNavbarExpanded={isOpen} onClick={this.toggle} />
        <Collapse
          className={classNames({ show: isOpen })}
          isOpen={false}
          navbar
        >
          <div className={classNames('navbar__content')}>
            <NavbarContent
              email={email}
              className={classNames('navbar__content-collapse')}
            />

            <NavbarProfileDropdownMenu
              className={classNames('navbar__content-collapse-visible')}
            />
          </div>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  balance: NavbarBalance.propTypes.balance,
  email: PropTypes.string
};
export default Header;

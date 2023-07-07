import React from 'react';
import NavbarBrand from './NavbarBrand.jsx';
import NavbarContent from './NavbarContent.jsx';
import { Collapse, Navbar } from 'reactstrap';
import NavbarBalance from './NavbarBalance';
import NavbarToggle from './NavbarToggle';
import classNames from 'classnames';
import NavbarProfileDropdownMenu from './NavbarProfileDropdownMenu';
import BigNumber from 'bignumber.js';

class Header extends React.Component {
  state = {
    isOpen: false,
    email: 'email@email.com'
  };

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    const { isOpen, email } = this.state;
    return (
      <Navbar expand="md">
        <NavbarBrand isFullLogo={isOpen} />
        {!isOpen && <NavbarBalance amount={BigNumber('0.00030530')} />}
        <NavbarToggle navExpanded={isOpen} onClick={this.toggle} />
        <Collapse
          className={classNames({ show: isOpen })}
          isOpen={false}
          navbar
        >
          <NavbarContent
            email={email}
            className={classNames('navbar__content-collapse')}
          />

          <NavbarProfileDropdownMenu
            className={classNames('navbar__content-collapse-visible')}
          />
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;

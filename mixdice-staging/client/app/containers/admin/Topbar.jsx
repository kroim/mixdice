import React from 'react';
import { Collapse, Navbar } from 'reactstrap';
import classNames from 'classnames';
import NavbarProfileDropdownMenu from 'app/components/header/NavbarProfileDropdownMenu';
import NavbarBrand from 'app/components/header/NavbarBrand.jsx';
import NavbarContent from 'app/components/header/NavbarContent.jsx';
import NavbarBalance from 'app/components/header/NavbarBalance.tsx';
import NavbarToggle from 'app/components/header/NavbarToggle';

export default class Topbar extends React.Component {
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
    const balance = 0;
    const email = 'ppk7@pm.me';

    return (
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-right mb-0">
          <li className="d-none d-sm-block">
            <form className="app-search">
              <div className="app-search-box">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <i className="fe-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </li>

          {/* <li className="dropdown notification-list"> */}
          <Navbar expand="md">
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
          {/* </li> */}

          <li className="dropdown notification-list">
            <a
              href="javascript:void(0);"
              className="nav-link right-bar-toggle waves-effect waves-light"
            >
              <i className="fe-settings noti-icon"></i>
            </a>
          </li>
        </ul>

        <div className="logo-box">
          <a href="index.html" className="logo text-center">
            <span className="logo-lg">
              <img src="assets/images/logo-dark.png" alt="" height="18" />
            </span>
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="24" />
            </span>
          </a>
        </div>

        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
          <li>
            <button className="button-menu-mobile waves-effect waves-light">
              <i className="fe-menu"></i>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

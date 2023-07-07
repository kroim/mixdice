import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavbarToggler, NavbarBrand as RSNavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarBrand = ({ isFullLogo }) => (
  <RSNavbarBrand href="/">
    {/*<Link to="/">*/}
    <div
      className={classNames('nav__brand', {
        'nav__brand--full-logo': isFullLogo
      })}
    />
    {/*</Link>*/}
  </RSNavbarBrand>
);

NavbarBrand.propTypes = {
  isFullLogo: PropTypes.bool
};
NavbarBrand.defaultProps = {
  isFullLogo: false
};

export default NavbarBrand;

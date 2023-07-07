import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const NavbarToggle = ({ navExpanded, ...props }) => (
  <div {...props} className={classNames('header__navbar-toggle-container')}>
    {navExpanded ? (
      <FontAwesomeIcon icon={faTimes} color="white" />
    ) : (
      <div className={classNames('header__navbar-toggle')} />
    )}
  </div>
);

NavbarToggle.propTypes = {
  isNavbarExpanded: PropTypes.bool
};
NavbarToggle.defaultProps = {
  isNavbarExpanded: false
};
export default NavbarToggle;

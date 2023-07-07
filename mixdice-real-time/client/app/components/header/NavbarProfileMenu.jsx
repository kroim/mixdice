import React from 'react';
import PropTypes from 'prop-types';
import { DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Avatar from '../../../public/assets/svg/avatar.svg';
import NavbarProfileDropdownMenu from './NavbarProfileDropdownMenu';
const ProfileAvatar = () => <Avatar />;

const NavarProfileMenu = ({ email }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      <ProfileAvatar /> {email}
    </DropdownToggle>
    <NavbarProfileDropdownMenu />
  </UncontrolledDropdown>
);

NavarProfileMenu.propTypes = {
  email: PropTypes.string
};

export default NavarProfileMenu;

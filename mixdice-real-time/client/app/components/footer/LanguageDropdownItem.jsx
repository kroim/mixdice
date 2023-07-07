import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';

const LanguageDropdownItem = ({ id, label, onClick, flag: Flag }) => {
  function handleOnClick() {
    onClick(id);
  }
  return (
    <DropdownItem onClick={handleOnClick}>
      <Flag />
      {label}
    </DropdownItem>
  );
};
LanguageDropdownItem.propTypes = {
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  flag: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
export default LanguageDropdownItem;

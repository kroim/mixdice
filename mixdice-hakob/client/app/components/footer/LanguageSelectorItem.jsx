import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';

const LanguageSelectorItem = ({ label, onClick, flag: Flag }) => {
  function handleOnClick() {
    onClick(label);
  }
  return (
    <DropdownItem onClick={handleOnClick}>
      <Flag /> {label}
    </DropdownItem>
  );
};
LanguageSelectorItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  flag: PropTypes.func.isRequired
};
export default LanguageSelectorItem;

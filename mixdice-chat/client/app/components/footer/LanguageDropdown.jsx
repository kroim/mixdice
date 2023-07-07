import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import LanguageDropdownItem from './LanguageDropdownItem.jsx';

const LanguageDropdown = ({ languages, onClick, selectedLanguageId }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  function handleOnClick(id) {
    onClick(id);
  }
  const selectedLanguage = languages.find(e => e.id === selectedLanguageId);
  const SelectedLanguageFlag = selectedLanguage.flag;
  return (
    <span className={classNames('footer__bottom-content__language-dropdown')}>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle
          className={classNames(
            'footer__bottom-content__list-item__language-dropdown'
          )}
          tag="span"
          onClick={toggle}
        >
          <SelectedLanguageFlag
            className={classNames(
              'footer__bottom-content__selected-language-icon'
            )}
          />
          {selectedLanguage.label}
          <FontAwesomeIcon style={{ marginLeft: 4 }} icon={faCaretUp} />
        </DropdownToggle>
        <DropdownMenu right>
          <div
            className={classNames(
              'footer__bottom-content__list-item__language-dropdown__item-container'
            )}
          >
            {languages.map(({ id, flag, label }) => (
              <LanguageDropdownItem
                onClick={handleOnClick}
                id={id}
                flag={flag}
                label={label}
                key={id}
              />
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    </span>
  );
};

LanguageDropdown.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedLanguageId: PropTypes.number,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};
LanguageDropdown.defaultProps = {
  selectedLanguage: ''
};
export default LanguageDropdown;

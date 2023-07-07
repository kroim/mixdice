import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import UnitedKingdom from '../../../public/assets/svg/flags/united-kingdom.svg';
import Poland from '../../../public/assets/svg/flags/poland.svg';
import China from '../../../public/assets/svg/flags/china.svg';
import Thailand from '../../../public/assets/svg/flags/thailand.svg';
import LanguageSelectorItem from './LanguageSelectorItem.jsx';

const languages = [
  {
    key: 1,
    flag: UnitedKingdom,
    label: 'EN'
  },
  {
    key: 2,
    flag: Poland,
    label: 'PL'
  },
  {
    key: 3,
    flag: China,
    label: 'CN'
  },
  {
    key: 4,
    flag: Thailand,
    label: 'TH'
  },
  {
    key: 5,
    flag: Thailand,
    label: 'TH'
  },
  {
    key: 6,
    flag: Thailand,
    label: 'TH'
  }
];

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  function onClick(label) {
    alert(label);
  }
  return (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle
        className={classNames(
          'footer__bottom-content__menu-list__list-item__language-dropdown'
        )}
        tag="span"
        onClick={toggle}
      >
        EN
        <FontAwesomeIcon style={{ marginLeft: 4 }} icon={faCaretUp} />
      </DropdownToggle>
      <DropdownMenu right>
        <div
          className={classNames(
            'footer__bottom-content__menu-list__list-item__language-dropdown__item-container'
          )}
        >
          {languages.map(e => (
            <LanguageSelectorItem
              onClick={onClick}
              flag={e.flag}
              label={e.label}
              key={e.key}
            />
          ))}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

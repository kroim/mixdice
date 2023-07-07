import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Nav
} from 'reactstrap';
import Eth from 'assets/svg/crypto/eth.svg';
import Ltc from 'assets/svg/crypto/ltc.svg';
import Neo from 'assets/svg/crypto/neo.svg';
import Xrp from 'assets/svg/crypto/xrp.svg';
import BtcAmount from '../crypto/BtcAmount';
import BigNumber from 'bignumber.js';

const data = [
  { key: '1', icon: Eth, amount: '0.00000546' },
  { key: '2', icon: Ltc, amount: '0.00043654' },
  { key: '3', icon: Xrp, amount: '0.00000054' },
  { key: '4', icon: Neo, amount: '0.00000023' }
];

const NavbarBalance = ({ amount }) => (
  <Nav className="ml-auto mr-auto">
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <BtcAmount amount={amount} />
      </DropdownToggle>
      <DropdownMenu
        className={classNames('nav__dropdown-balance__container')}
        right
      >
        <div className={classNames('nav__dropdown-balance')}>
          {data.map(({ icon: Icon, ...e }) => (
            <DropdownItem key={e.key}>
              <Icon className={classNames('mr-2')} />
              {e.amount}
            </DropdownItem>
          ))}
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
);

NavbarBalance.propTypes = {
  amount: PropTypes.instanceOf(BigNumber).isRequired
};
export default NavbarBalance;

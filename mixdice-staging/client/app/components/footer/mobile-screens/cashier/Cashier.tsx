import React from 'react';
import classNames from 'classnames';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import CashierIcon from 'assets/svg/cashier.svg';
import Deposit from 'app/containers/deposit/Deposit';
import Withdraw from 'app/containers/witdraw/Withdraw';
import { balance } from 'app/dummyData';
interface CashierProps {}

const Cashier: React.FC<CashierProps> = ({}) => {
  const tabs = [
    {
      id: '1',
      title: 'Deposit',
      content: <Deposit address={'replace this with a real address'} />
    },
    {
      id: '2',
      title: 'Withdraw',
      content: <Withdraw balance={balance} />
    }
  ];
  return (
    <div>
      <div className={classNames('mobile-popup__header')}>
        <span className={classNames('mobile-popup__header__icon')}>
          <CashierIcon />
        </span>
        <span className={classNames('mobile-popup__header__title')}>
          Cashier
        </span>
      </div>
      <TabbedNavigation
        tabs={tabs}
        tabContentClassName={classNames(
          'mobile-popup__padded-container',
          'mobile-popup__scroll-container'
        )}
      />
    </div>
  );
};

export default Cashier;

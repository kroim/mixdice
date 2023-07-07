import React from 'react';
import classNames from 'classnames';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import BetsHistory from 'app/components/bet/BetsHistory';

export default () => {
  const tabs = [
    {
      id: '1',
      title: 'My Bets',
      content: <BetsHistory isSmall />
    },
    {
      id: '2',
      title: 'All bets',
      content: <BetsHistory isSmall />
    },
    {
      id: '3',
      title: 'High Rollers',
      content: <BetsHistory isSmall />
    }
  ];
  return (
    <div>
      <TabbedNavigation
        navClassName={classNames('nav--with-margin')}
        initialActiveId={tabs[0].id}
        tabs={tabs}
      />
    </div>
  );
};

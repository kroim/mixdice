import React from 'react';
import classNames from 'classnames';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import BetsHistory from 'app/components/bet/BetsHistory';

interface BetsProps {
  myBetsHistory: object[];
  allBetsHistory: object[];
  highRollersHistory: object[];
}

const Bets = ({
  myBetsHistory = [],
  allBetsHistory = [],
  highRollersHistory = []
}: BetsProps) => {
  const tabs = [
    {
      id: '1',
      title: 'My Bets',
      content: <BetsHistory isSmall history={myBetsHistory} />
    },
    {
      id: '2',
      title: 'All bets',
      content: <BetsHistory isSmall history={allBetsHistory} />
    },
    {
      id: '3',
      title: 'High Rollers',
      content: <BetsHistory isSmall history={highRollersHistory} />
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
Bets.defaultProps = {
  myBetsHistory: [],
  allBetsHistory: [],
  highRollersHistory: []
};
export default Bets;

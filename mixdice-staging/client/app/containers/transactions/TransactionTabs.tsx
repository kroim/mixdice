import React from 'react';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import BetsHistory from 'app/containers/transactions/bets/BetsHistory';
import DepositsHistory from 'app/containers/transactions/deposits/DepositsHistory';
import WithdrawalsHistory from 'app/containers/transactions/withdrawals/WithdrawalsHistory';

interface TransactionTabsProps {
  selectedTab: number;
}

const TransactionTabs: React.FC<TransactionTabsProps> = ({ selectedTab }) => {
  const tabs = [
    {
      id: 1,
      title: 'Bets',
      url: '/transactions/bets',
      content: <BetsHistory />
    },
    {
      id: 2,
      title: 'Deposits',
      url: '/transactions/deposits',
      content: <DepositsHistory />
    },
    {
      id: 3,
      title: 'Withdrawals',
      url: '/transactions/withdrawals',
      content: <WithdrawalsHistory />
    }
  ];
  return <TabbedNavigation tabs={tabs} initialActiveId={selectedTab} />;
};

export default TransactionTabs;

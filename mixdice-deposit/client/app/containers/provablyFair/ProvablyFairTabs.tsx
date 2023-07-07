import React from 'react';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import Signup from 'app/containers/authentication/signup/Signup';
import Login from 'app/containers/authentication/login/Login';
import ProvablyFairFairness from 'app/containers/provablyFair/ProvablyFairFairness';
import ProvablyFairVerify from 'app/containers/provablyFair/ProvablyFairVerify';

interface ProvablyFairTabsProps {
  clientSeed: string;
}

const ProvablyFairTabs: React.FC<ProvablyFairTabsProps> = ({ clientSeed }) => {
  const tabs = [
    {
      id: 1,
      title: 'Fairness',
      content: <ProvablyFairFairness clientSeed={clientSeed} />
    },
    {
      id: 2,
      title: 'Verify',
      content: <ProvablyFairVerify clientSeed={clientSeed} />
    }
  ];
  return <TabbedNavigation tabs={tabs} initialActiveId={1} />;
};

export default ProvablyFairTabs;

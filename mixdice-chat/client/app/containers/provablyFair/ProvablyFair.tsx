import React from 'react';
import classNames from 'classnames';
import ProvablyFairTabs from 'app/containers/provablyFair/ProvablyFairTabs';

interface ProvablyFairProps {
  clientSeed: string;
}

const ProvablyFair: React.FC<ProvablyFairProps> = ({ clientSeed }) => {
  return <ProvablyFairTabs clientSeed={clientSeed} />;
};

export default ProvablyFair;

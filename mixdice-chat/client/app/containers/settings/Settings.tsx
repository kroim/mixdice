import React from 'react';
import classNames from 'classnames';
import SecuritySettings from './tabs/SecuritySettings';

interface SettingsProps {
  email: string;
  onSetInfo: (object) => any;
}

const Settings: React.FC<SettingsProps> = ({ email, onSetInfo }) => {
  return (
    <div className={classNames('settings')}>
      <SecuritySettings email={email} onSetInfo={onSetInfo} />
    </div>
  );
};

export default Settings;

import React from 'react';
import classNames from 'classnames';
import SecuritySettings from './tabs/SecuritySettings';

interface SettingsProps {
  email: string;
}

const Settings: React.FC<SettingsProps> = ({ email }) => {
  return (
    <div className={classNames('settings')}>
      <SecuritySettings email={email} />
    </div>
  );
};

export default Settings;

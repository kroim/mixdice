import React, { useState } from 'react';
import classNames from 'classnames';
import validate from 'validate.js';
import Input from 'app/components/form/Input';
import { Button } from 'reactstrap';
import {
  password as passwordConstraint
} from 'validation/';

interface PasswordSettingProps {
  onSetInfo: (object) => any;
}

const PasswordSetting: React.FC<PasswordSettingProps> = ({
  onSetInfo
}) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function onPasswordConfirm() {
    onSetInfo({
      key: 'password',
      value: password
    });
    const validation = validate({ password }, { password: passwordConstraint });
    if (validation) setPasswordError(validation.password[0]);
    else setPasswordError('');
  }
  return (
    <div className={classNames('settings settings--security-settings')}>
      <Input
        formGroupClassName={classNames('settings__form-group')}
        labelLight
        type="password"
        label="Password"
        placeholder="Enter password"
        helpText="Password must be minimum of 8 characters"
        onChange={setPassword}
        error={passwordError}
      />
      <div className={classNames('settings__confirm-button-container')}>
        <Button
          onClick={onPasswordConfirm}
          className={classNames('settings__confirm-button')}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default PasswordSetting;

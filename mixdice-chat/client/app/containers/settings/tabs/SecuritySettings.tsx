import React, { useState } from 'react';
import classNames from 'classnames';
import validate from 'validate.js';
import Input from 'app/components/form/Input';
import { Button } from 'reactstrap';
import {
  email as emailConstraint,
  password as passwordConstraint
} from 'validation/';

interface SecuritySettingsProps {
  email: string;
  onSetInfo: (object) => any;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({
  email: currentEmail,
  onSetInfo
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  function onEmailConfirm() {
    onSetInfo({
      key: 'email',
      value: email
    });
    const validation = validate({ email }, { email: emailConstraint });
    if (validation) setEmailError(validation.email[0]);
    else setEmailError('');
  }
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
        type="email"
        label="Email"
        placeholder={currentEmail}
        onChange={setEmail}
        error={emailError}
      />
      <div className={classNames('settings__confirm-button-container')}>
        <Button
          onClick={onEmailConfirm}
          className={classNames('settings__confirm-button')}
        >
          Confirm
        </Button>
      </div>

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

export default SecuritySettings;

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
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({
  email: currentEmail
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  function onEmailConfirm() {
    setEmailError(validate({ email }, { email: emailConstraint }).email[0]);
  }
  function onPasswordConfirm() {
    setPasswordError(
      validate({ password }, { password: passwordConstraint }).password[0]
    );
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

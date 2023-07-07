import React, { useState } from 'react';
import classNames from 'classnames';
import validate from 'validate.js';
import Input from 'app/components/form/Input';
import { Button } from 'reactstrap';
import { email as emailConstraint } from 'validation/';

interface EmailSettingProps {
  email: string;
  onSetInfo: (object) => any;
}

const EmailSetting: React.FC<EmailSettingProps> = ({
  email: currentEmail,
  onSetInfo
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  function onEmailConfirm() {
    onSetInfo({
      key: 'email',
      value: email
    });
    const validation = validate({ email }, { email: emailConstraint });
    if (validation) setEmailError(validation.email[0]);
    else setEmailError('');
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
    </div>
  );
};

export default EmailSetting;

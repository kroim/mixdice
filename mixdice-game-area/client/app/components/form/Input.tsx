import React, { useState } from 'react';
import classNames from 'classnames';
import {
  FormGroup,
  Label,
  Input as BootstrapInput,
  FormFeedback,
  FormText
} from 'reactstrap';
import uuid from 'uuid';

interface InputProps {
  formGroupClassName?: string;
  label?: string;
  id?: string;
  error?: string;
  helpText?: string;
  type?: string;
  onChange?: (value: string) => any;
  labelLight?: boolean;
  value?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  formGroupClassName,
  id = uuid(),
  label,
  error,
  helpText,
  type,
  onChange,
  labelLight = false,
  value,
  placeholder,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function handleSetIsPasswordVisible() {
    setIsPasswordVisible(!isPasswordVisible);
  }
  function handleOnChange(e) {
    onChange && onChange(e.target.value);
  }
  return (
    <FormGroup className={formGroupClassName}>
      {label && (
        <Label
          className={classNames('form-group__input__label', {
            'form-group__input__label--light': labelLight
          })}
          for={id}
        >
          {label}
        </Label>
      )}
      <BootstrapInput
        onChange={handleOnChange}
        value={value}
        type={
          type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type
        }
        placeholder={placeholder}
        invalid={!!error}
        id={id}
        {...props}
      />
      {error && <FormFeedback>{error}</FormFeedback>}
      {helpText && (
        <FormText
          className={classNames('form-group__input__help-text', {
            'form-group__input__help-text--light': labelLight
          })}
        >
          {helpText}
        </FormText>
      )}
      {type === 'password' && (
        <div
          onClick={handleSetIsPasswordVisible}
          className={classNames('form-group__password-button')}
        >
          {isPasswordVisible ? 'show' : 'hide'}
        </div>
      )}
    </FormGroup>
  );
};

export default Input;

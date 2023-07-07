import React from 'react';
import { Form as BootstrapForm } from 'reactstrap';
import classNames from 'classnames';

interface FormProps {
  onSubmit: (e?: object) => any;
  children: any;
  error?: string;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children, error }) => {
  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  }
  return (
    <BootstrapForm onSubmit={handleOnSubmit}>
      {children}
      <br />
      {error && <div className={classNames('text-danger')}>{error}</div>}
    </BootstrapForm>
  );
};

export default Form;

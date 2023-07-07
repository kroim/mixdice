import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Input from 'app/components/form/Input.tsx';
import Form from 'app/components/form/Form.tsx';

const Login = ({ onSubmit, usernameError, passwordError, formError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleOnSubmit() {
    onSubmit(email, password);
  }
  return (
    <Form onSubmit={handleOnSubmit} error={formError}>
      <Input
        onChange={setEmail}
        error={usernameError}
        label="Username/Email"
        type="email"
        placeholder="Username/Email"
        className="no-padding"
      />
      <Input
        onChange={setPassword}
        error={passwordError}
        label="Password"
        type="password"
        placeholder="Password"
        className="no-padding"
      />
      <a href="#" className="password-forgot-link">
        Forgot your Password
      </a>
      <Button>Login</Button>
    </Form>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  usernameError: PropTypes.string,
  passwordError: PropTypes.string,
  formError: PropTypes.string
};
Login.defaultProps = {
  usernameError: '',
  passwordError: '',
  formError: ''
};
export default Login;

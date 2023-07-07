import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert, Spinner } from 'reactstrap';
import Input from 'app/components/form/Input.tsx';
import Form from 'app/components/form/Form.tsx';

const Login = ({ onSubmit, errorMsg, proceeding }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleOnSubmit() {
    onSubmit(email, password);
  }
  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        onChange={setEmail}
        label="Username/Email"
        placeholder="Username/Email"
        className="no-padding"
      />
      <Input
        onChange={setPassword}
        label="Password"
        type="password"
        placeholder="Password"
        className="no-padding"
      />
      <a href="#" className="password-forgot-link">
        Forgot your Password
      </a>
      <Button>
        {proceeding ? <Spinner size="sm" color="secondary" /> : 'Login'}
      </Button>
      {errorMsg && <Alert color="danger">{errorMsg}</Alert>}
    </Form>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  proceeding: PropTypes.bool
};
Login.defaultProps = {
  proceeding: false
};
export default Login;

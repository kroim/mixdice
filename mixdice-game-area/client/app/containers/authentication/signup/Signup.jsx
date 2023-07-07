import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Input from 'app/components/form/Input.tsx';
import Checkbox from 'app/components/form/Checkbox.tsx';
import Form from 'app/components/form/Form.tsx';

const Signup = ({ onSubmit, usernameError, agreedError, formError }) => {
  const [username, setUsername] = useState('');
  const [agreed, setAgreed] = useState(false);
  function handleSubmit() {
    onSubmit(username, agreed);
  }
  return (
    <Form onSubmit={handleSubmit} error={formError}>
      <Input
        error={usernameError}
        onChange={setUsername}
        label="Username"
        placeholder="Username"
        type="username"
      />
      <Checkbox
        error={agreedError}
        onChange={setAgreed}
        label="I agree to the collection of information in the cookies, I agree with Privacy Policy and the Terms of Use, Gambling isn’t forbidden by my local authorities and I’m at least 18 years old."
      />
      <Button>Start Winning</Button>
    </Form>
  );
};
Signup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  usernameError: PropTypes.string,
  agreedError: PropTypes.string,
  formError: PropTypes.string
};
Signup.defaultProps = {
  usernameError: '',
  agreedError: '',
  formError: ''
};
export default Signup;

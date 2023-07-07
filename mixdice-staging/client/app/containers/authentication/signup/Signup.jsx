import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert, Spinner } from 'reactstrap';
import Input from 'app/components/form/Input.tsx';
import Checkbox from 'app/components/form/Checkbox.tsx';
import Form from 'app/components/form/Form.tsx';
import { withGetName } from 'app/providers/Auth';

const Signup = ({ onSubmit, errorMsg, proceeding, loadingName, name }) => {
  const [username, setUsername] = useState('');
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (!loadingName) {
      setUsername(name);
    }
  }, [loadingName]);

  function handleSubmit() {
    if (!proceeding) {
      onSubmit(username, agreed);
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={setUsername}
        value={username}
        label="Username"
        placeholder="Username"
        type="username"
      />
      <Checkbox
        onChange={setAgreed}
        label={
          <>
            I agree to the collection of information in the <span>cookies</span>
            , I agree with <span>Privacy Policy</span> and the{' '}
            <span>Terms of Use</span>, Gambling isn’t forbidden by my local
            authorities and I’m at least <span>18 years old</span>.
          </>
        }
      />
      <Button>
        {proceeding ? <Spinner size="sm" color="secondary" /> : 'Start Winning'}
      </Button>
      {errorMsg && <Alert color="danger">{errorMsg}</Alert>}
    </Form>
  );
};
Signup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadingName: PropTypes.bool,
  name: PropTypes.string,
  errorMsg: PropTypes.string,
  proceeding: PropTypes.bool
};
Signup.defaultProps = {};
export default withGetName(Signup);

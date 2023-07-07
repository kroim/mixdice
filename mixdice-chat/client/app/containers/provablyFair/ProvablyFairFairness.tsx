import React, { useState } from 'react';
import Input from 'app/components/form/Input';
import Form from 'app/components/form/Form';
import { Button, Alert } from 'reactstrap';
import Seed from 'app/utils/Seed';
import validate from 'validate.js';

interface ProvablyFairProps {
  clientSeed: string;
}

const ProvablyFairFairness: React.FC<ProvablyFairProps> = ({
  clientSeed: defaultClientSeed
}) => {
  const [clientSeed, setClientSeed] = useState(defaultClientSeed);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  async function handleOnClientSeedSubmit() {
    const validation = validate(
      { clientSeed },
      {
        clientSeed: {
          presence: { allowEmpty: false },
          length: { minimum: 1, maximum: 40 }
        }
      }
    );
    console.log(clientSeed, validation);
    if (validation) setErrorMsg(validation.clientSeed[0]);
    else {
      setErrorMsg('');
      Seed.set(clientSeed);
      setSuccess(true);
    }
  }

  return (
    <div>
      <Form onSubmit={handleOnClientSeedSubmit}>
        <Input
          onChange={setClientSeed}
          value={clientSeed}
          label="Client seed"
          placeholder="Enter here"
        />
        <Button>Set seed</Button>

        {errorMsg && <Alert color="danger">{errorMsg}</Alert>}
        {success && <Alert color="success">Client seed has been set!</Alert>}
      </Form>
    </div>
  );
};

export default ProvablyFairFairness;

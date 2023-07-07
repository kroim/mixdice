import React, { useState } from 'react';
import validate from 'validate.js';
import classNames from 'classnames';

import Form from 'app/components/form/Form';
import Input from 'app/components/form/Input';
import { Button, Alert } from 'reactstrap';
import { withApollo, WithApolloClient } from 'react-apollo';
import { VERIFY_BET_RESULT } from 'app/providers/gql/bet';
import ClientSeedValidator from 'app/validation/clientSeed';

interface ProvablyFairVerifyProps {
  clientSeed: string;
}

const ProvablyFairVerify: React.FC<
  WithApolloClient<ProvablyFairVerifyProps>
> = ({ client, clientSeed: defaultClientSeed }) => {
  const [clientSeed, setClientSeed] = useState(defaultClientSeed);
  const [nonce, setNonce] = useState('');
  const [serverSeed, setServerSeed] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState('');
  async function handleOnVerifySubmit() {
    setErrorMsg('');
    const validation = validate(
      { clientSeed, nonce, serverSeed },
      {
        clientSeed: ClientSeedValidator,
        serverSeed: { presence: { allowEmpty: false } },
        nonce: { presence: { allowEmpty: false } }
      }
    );
    if (validation) {
      setErrorMsg(validation[Object.keys(validation)[0]][0]);
      return;
    }
    // @ts-ignore
    const { data } = await client.query({
      query: VERIFY_BET_RESULT,
      variables: {
        input: {
          clientSeed,
          nonce,
          serverSeed
        }
      }
    });

    setResult(data.verifyBetResult.result);
  }

  return (
    <div>
      <Form onSubmit={handleOnVerifySubmit}>
        <Input
          onChange={setClientSeed}
          value={clientSeed}
          label="Client seed"
          placeholder="Enter here"
        />
        <Input
          onChange={setNonce}
          value={nonce}
          label="Nonce"
          placeholder="Enter here"
        />
        <Input
          onChange={setServerSeed}
          value={serverSeed}
          label="Server seed"
          placeholder="Enter here"
        />
        {result && <h3 className={classNames('text-center')}>{result}</h3>}
        <Button>Verify</Button>

        {errorMsg && <Alert color="danger">{errorMsg}</Alert>}
      </Form>
    </div>
  );
};

export default withApollo(ProvablyFairVerify);

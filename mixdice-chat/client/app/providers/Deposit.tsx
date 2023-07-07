import React, { ComponentClass } from 'react';
import { Mutation } from 'react-apollo';
import { GET_WALLET } from 'app/providers/gql/deposit';

function withGetWallet<C extends React.ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={GET_WALLET}>
      {getWallet => {
        return <Component onGetWallet={getWallet} {...props} />;
      }}
    </Mutation>
  )) as any) as C;
}
export { withGetWallet };

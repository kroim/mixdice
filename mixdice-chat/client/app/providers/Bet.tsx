import React, { ComponentClass } from 'react';
import { Mutation } from 'react-apollo';
import { PLACE_BET } from 'app/providers/gql/bet';

function withPlaceBet<C extends React.ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={PLACE_BET}>
      {onPlaceBet => {
        return <Component onPlaceBet={onPlaceBet} {...props} />;
      }}
    </Mutation>
  )) as any) as C;
}
export { withPlaceBet };

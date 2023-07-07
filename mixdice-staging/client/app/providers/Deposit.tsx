import React, { ComponentClass } from 'react';
import { Mutation, Query } from 'react-apollo';
import {
  GET_WALLET,
  DEPOSIT_HISTORY,
  DEPOSIT_HISTORY_SUBSCRIPTION,
  ALL_DEPOSIT_HISTORY
} from 'app/providers/gql/deposit';

function withGetWallet<C extends React.ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={GET_WALLET}>
      {getWallet => {
        return <Component onGetWallet={getWallet} {...props} />;
      }}
    </Mutation>
  )) as any) as C;
}

function withDepositHistory(Component) {
  return (props => (
    <Query query={DEPOSIT_HISTORY}>
      {({ subscribeToMore, data, loading }) => (
        <Component
          {...props}
          isLoading={loading}
          deposits={data && data.depositHistory}
          subscribeToMore={() =>
            subscribeToMore({
              document: DEPOSIT_HISTORY_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => ({
                depositHistory: subscriptionData.data.depositHistoryChanged
              })
            })
          }
        />
      )}
    </Query>
  )) as any;
}

function withAllDepositsHistory(Component) {
  return (props => (
    <Query query={ALL_DEPOSIT_HISTORY}>
      {({ subscribeToMore, data, loading }) => (
        <Component
          {...props}
          isLoading={loading}
          deposits={data && data.allDepositsHistory}
          subscribeToMore={() =>
            subscribeToMore({
              document: DEPOSIT_HISTORY_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => ({
                allDepositsHistory: subscriptionData.data.depositHistoryChanged
              })
            })
          }
        />
      )}
    </Query>
  )) as any;
}
export { withGetWallet, withDepositHistory, withAllDepositsHistory };

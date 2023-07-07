import React, { ComponentClass } from 'react';
import { Query } from 'react-apollo';
import { BALANCE_SUBSCRIPTION, GET_BALANCE } from 'app/providers/gql/balance';
import BigNumber from 'bignumber.js';

function withBalance(Component) {
  return (props => (
    <Query query={GET_BALANCE}>
      {({ subscribeToMore, data, loading }) => (
        <Component
          {...props}
          isLoading={loading}
          balance={(() => {
            return new BigNumber(
              (data && data.me && data.me.balance && data.me.balance.amount) ||
                0
            );
          })()}
          subscribeToMore={() =>
            subscribeToMore({
              document: BALANCE_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => ({
                me: {
                  ...prev.me,
                  balance: {
                    ...(prev.me && prev.me.balance),
                    amount: subscriptionData.data.balanceChanged.amount
                  }
                }
              })
            })
          }
        />
      )}
    </Query>
  )) as any;
}
export { withBalance };

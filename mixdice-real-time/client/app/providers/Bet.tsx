import React, { ComponentClass, useState } from 'react';
import { Mutation, Query, Subscription } from 'react-apollo';
import {
  PLACE_BET,
  BET_HISTORY,
  BETS_SUBSCRIPTION
} from 'app/providers/gql/bet';
import { GET_NAME } from 'app/providers/gql/auth';
import normalizeBet from 'app/utils/normalizeBet';
import Auth from 'app/utils/auth';

function withPlaceBet<C extends ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={PLACE_BET}>
      {onPlaceBet => {
        return <Component onPlaceBet={onPlaceBet} {...props} />;
      }}
    </Mutation>
  )) as any) as C;
}
function withBetHistory(Component) {
  return ({ limit = 5, isFromMe = false, ...props }) => {
    const userFilter = isFromMe ? { userId: Auth.getUser().userId } : {};
    return (
      <Query
        query={BET_HISTORY}
        variables={{
          input: { limit, ...userFilter }
        }}
      >
        {({ subscribeToMore, data, loading }) => (
          <Component
            {...props}
            isLoading={loading}
            history={
              data && data.betsHistory && data.betsHistory.bet.map(normalizeBet)
            }
            subscribeToMore={() =>
              subscribeToMore({
                document: BETS_SUBSCRIPTION,
                variables: { input: { ...userFilter } },
                updateQuery: (prev, { subscriptionData }) => {
                  let newItem = subscriptionData.data.betPlaced;

                  if (
                    !subscriptionData.data ||
                    prev.betsHistory.bet.find(
                      e => normalizeBet(e)._id === normalizeBet(newItem)._id
                    )
                  ) {
                    return prev;
                  }

                  const newBets = [newItem, ...prev.betsHistory.bet].slice(
                    0,
                    limit
                  );

                  return {
                    betsHistory: {
                      ...prev.betsHistory,
                      bet: newBets
                    }
                  };
                }
              })
            }
          />
        )}
      </Query>
    );
  };
}

function withMyBetPlaced<C extends ComponentClass>(Component: C): C {
  return ((props => (
    <Subscription subscription={BETS_SUBSCRIPTION}>
      {onBet => {
        return <Component onBet={onBet} {...props} />;
      }}
    </Subscription>
  )) as any) as C;
}
export { withPlaceBet, withMyBetPlaced, withBetHistory };

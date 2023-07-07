import { gql } from 'apollo-boost';

export const BALANCE_SUBSCRIPTION = gql`
  subscription {
    balanceChanged {
      amount
    }
  }
`;
export const GET_BALANCE = gql`
  {
    me {
      balance {
        currency
        amount
      }
    }
  }
`;

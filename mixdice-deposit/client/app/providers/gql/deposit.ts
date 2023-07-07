import { gql } from 'apollo-boost';

export const GET_WALLET = gql`
  mutation($username: String) {
    getWallet(username: $username) {
      address
      balance
    }
  }
`;

export const DEPOSIT_HISTORY_SUBSCRIPTION = gql`
  subscription {
    depositHistoryChanged {
      hash
      amount
      status
      time
    }
  }
`;

export const DEPOSIT_HISTORY = gql`
  {
    depositHistory {
      hash
      amount
      status
      time
    }
  }
`;
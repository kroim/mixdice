import { gql } from 'apollo-boost';

export const GET_WALLET = gql`
  mutation($username: String) {
    getWallet(username: $username) {
      address
      balance
    }
  }
`;

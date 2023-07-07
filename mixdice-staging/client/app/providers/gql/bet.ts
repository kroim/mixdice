import { gql } from 'apollo-boost';

export const PLACE_BET = gql`
  mutation($input: PlaceBetInput!) {
    placeBet(input: $input) {
      bet {
        nonce
        result
        serverSeed
        serverSeedPlain
      }
    }
  }
`;

export const VERIFY_BET_RESULT = gql`
  query($input: VerifyBetResultInput!) {
    verifyBetResult(input: $input) {
      result
    }
  }
`;
export const BET_HISTORY = gql`
  query($input: BetHistoryInput!) {
    betsHistory(input: $input) {
      bet {
        _id
        result
        betAmount
        targetValue
        isUnder
        transactionAmount
        createdAt
        user {
          username
        }
      }
    }
  }
`;
export const BETS_SUBSCRIPTION = gql`
  subscription($input: BetPlacedInput!) {
    betPlaced(input: $input) {
      _id
      result
      betAmount
      targetValue
      isUnder
      transactionAmount
      createdAt
      user {
        username
      }
    }
  }
`;

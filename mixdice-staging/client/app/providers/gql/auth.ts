import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation($username: String!) {
    createUser(username: $username) {
      _id
      token
    }
  }
`;

export const SET_UESR_INFO = gql`
  mutation($input: SetUserInfoInput!) {
    setUserInfo(input: $input) {
      email
      password
    }
  }
`;

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      username
      email
      password
    }
  }
`;

export const GET_NAME = gql`
  {
    getName(name: "")
  }
`;
export const SERVER_SEED = gql`
  {
    serverSeed
  }
`;

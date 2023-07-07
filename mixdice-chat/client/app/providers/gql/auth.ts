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
  mutation($username: String!, $info: UserInfoInput!) {
    setUserInfo(username: $username, info: $info) {
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

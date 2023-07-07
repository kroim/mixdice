import React, { ComponentClass } from 'react';
import { Mutation, Query } from 'react-apollo';
import {
  CREATE_USER,
  SET_UESR_INFO,
  GET_NAME,
  LOGIN
} from 'app/providers/gql/auth';

function withCreateUser<C extends ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={CREATE_USER}>
      {createUser => <Component createUser={createUser} {...props} />}
    </Mutation>
  )) as any) as C;
}

function withSetUserInfo<C extends ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={SET_UESR_INFO}>
      {setUserInfo => <Component setUserInfo={setUserInfo} {...props} />}
    </Mutation>
  )) as any) as C;
}

function withGetName<C extends React.ComponentClass>(Component: C): C {
  return ((props => (
    <Query query={GET_NAME}>
      {({ loading, data }) => {
        return (
          <Component
            loadingName={loading}
            name={data && data.getName}
            {...props}
          />
        );
      }}
    </Query>
  )) as any) as C;
}

function withLogin<C extends React.ComponentClass>(Component: C): C {
  return ((props => (
    <Mutation mutation={LOGIN}>
      {login => {
        return <Component login={login} {...props} />;
      }}
    </Mutation>
  )) as any) as C;
}

export { withCreateUser, withSetUserInfo, withGetName, withLogin };

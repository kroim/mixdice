import ApolloClient from 'apollo-boost';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import config from '../../../config/config';

const isDev = process.env.NODE_ENV !== 'production';

const httpLink = new HttpLink({
  uri: '/graphql'
});

// Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:5000/`,
//   options: {
//     reconnect: true
//   }
// });

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    console.log(definition);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  // wsLink,
  httpLink
);

const client = new ApolloClient({
  link
});

export default client;

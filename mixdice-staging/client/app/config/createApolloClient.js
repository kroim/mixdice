import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { API_DOMAIN } from '../../../config/config';
import { ApolloClient, InMemoryCache } from 'apollo-boost';

const isDev = process.env.NODE_ENV !== 'production';

const httpLink = new HttpLink({
  uri: '/graphql'
});

const wsLink = new WebSocketLink({
  uri: `ws://${API_DOMAIN}/subscriptions`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;

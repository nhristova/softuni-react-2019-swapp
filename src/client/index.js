import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { loader } from 'graphql.macro';
import authLink from './auth';
import { validateToken } from './validateToken';

const typeDefs = loader('./local-schema.gql');

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  typeDefs,
});

// local state always use {data: { }} object
cache.writeData({
  data: {
    authenticated: validateToken(localStorage.getItem('token')),
  },
});

export default client;

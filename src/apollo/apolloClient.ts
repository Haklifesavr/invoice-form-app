// src/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Return the headers with any required authentication token
  return {
    headers: {
      ...headers,
      // authorization: `Bearer ${YOUR_AUTH_TOKEN}`, // Uncomment and replace with your auth token if needed
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

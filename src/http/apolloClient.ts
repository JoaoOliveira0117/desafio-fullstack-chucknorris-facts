import { ApolloClient, InMemoryCache } from '@apollo/client';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

const client = new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache(),
});

export default client;

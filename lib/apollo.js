import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.GRAPHQL_STRAPI_URL
      ? process.env.GRAPHQL_STRAPI_URL
      : "http://localhost:8082/graphql", // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.GRAPHQL_STRAPI_URL ?  process.env.GRAPHQL_STRAPI_URL : "http://localhost:1337/graphql", // Server URL (must be absolute)
    credentials: "cross-origin" // Additional fetch() options like `credentials` or `headers`
  }),
  cache: new InMemoryCache()
});

export default apolloClient;
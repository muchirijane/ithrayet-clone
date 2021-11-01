import CryptoJS from "crypto-js";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.GRAPHQL_STRAPI_URL
      ? process.env.GRAPHQL_STRAPI_URL
      : "http://localhost:8082/graphql",
    headers: {
      "x-api-key": CryptoJS.AES.encrypt(
        `${process.env.API_SECRET_VALUE}${new Date().toISOString()}`,
        process.env.API_SECRET_KEY
      ).toString(),
    },
  }),
  cache: new InMemoryCache(),
  credentials: "same-origin",
});

export default apolloClient;

import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import stateLink from "./linkState";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import cache from "./cache";
import "./sensors";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, stateLink, new HttpLink()])
});

export default client;

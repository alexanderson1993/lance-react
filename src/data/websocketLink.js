import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

const wsLink = new WebSocketLink({
  uri: `ws://${hostname}:${parseInt(window.location.port, 10) + 2}`,
  options: {
    reconnect: true
  }
});

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true
});

const link = new WebSocketLink(client);

export default link;

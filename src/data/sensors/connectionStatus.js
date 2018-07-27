import client from "../graphqlClient";
import gql from "graphql-tag";

var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function updateConnectionStatus() {
  const UPDATE_NETWORK_STATUS = gql`
    mutation updateNetworkStatus($isConnected: Boolean) {
      updateNetworkStatus(isConnected: $isConnected) @client
    }
  `;
  client.mutate({
    mutation: UPDATE_NETWORK_STATUS,
    variables: { isConnected: connection.downlink > 0 }
  });
}

connection.addEventListener("change", updateConnectionStatus);

import { withClientState } from "apollo-link-state";
import cache from "./cache";

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache: cacheData }) => {
        const data = {
          networkStatus: {
            __typename: "NetworkStatus",
            isConnected
          }
        };
        cacheData.writeData({ data });
        return null;
      },

      updateLanceObjects: (_, { objects }, { cache: cacheData }) => {
        const data = {
          lanceWorld: {
            __typename: "LanceWorld",
            objects
          }
        };
        cacheData.writeData({ data });
        return null;
      }
    }
  },
  defaults: {
    networkStatus: {
      __typename: "NetworkStatus",
      isConnected: true
    },
    lanceWorld: {
      __typename: "LanceWorld",
      objects: []
    }
  }
});

export default stateLink;

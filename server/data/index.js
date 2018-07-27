import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers
});

export default server;

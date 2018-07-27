import express from "express";
import graphqlServer from "./data";

const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("hello world"));

graphqlServer.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
  )
);

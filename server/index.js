import express from "express";
import graphqlServer from "./data";
import socketIO from "socket.io";

// Game Server
import MyServerEngine from "./lance/engine";
import MyGameEngine from "../src/common/MyGameEngine";

const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("hello world"));

graphqlServer.applyMiddleware({ app }); // app is from an existing express app

const requestHandler = app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
  )
);

const io = socketIO(requestHandler);

// Game Instances
const gameEngine = new MyGameEngine();
const serverEngine = new MyServerEngine(io, gameEngine, {
  debug: {},
  updateRate: 6
});

// start the game
serverEngine.start();

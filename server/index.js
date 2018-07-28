import express from "express";
import socketIO from "socket.io";

// Game Server
import MyServerEngine from "./lance/engine";
import MyGameEngine from "../src/common/MyGameEngine";

const PORT = 3001;
const app = express();
app.get("/", (req, res) => res.send("hello world"));

const requestHandler = app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
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

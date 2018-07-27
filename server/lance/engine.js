import ServerEngine from "lance-gg/es5/ServerEngine";
import PlayerAvatar from "../../src/common/PlayerAvatar";

export default class MyServerEngine extends ServerEngine {
  constructor(io, gameEngine, inputOptions) {
    super(io, gameEngine, inputOptions);
  }

  start() {
    super.start();

    this.gameEngine.initGame();

    this.players = {
      player1: null,
      player2: null
    };
  }

  onPlayerConnected(socket) {
    super.onPlayerConnected(socket);

    // attach newly connected player an available paddle
    if (this.players.player1 === null) {
      this.players.player1 = socket.id;
      this.gameEngine.paddle1.playerId = socket.playerId;
    } else if (this.players.player2 === null) {
      this.players.player2 = socket.id;
      this.gameEngine.paddle2.playerId = socket.playerId;
    }
  }

  onPlayerDisconnected(socketId, playerId) {
    super.onPlayerDisconnected(socketId, playerId);

    if (this.players.player1 == socketId) {
      console.log("Player 1 disconnected");
      this.players.player1 = null;
    } else if (this.players.player2 == socketId) {
      console.log("Player 2 disconnected");
      this.players.player2 = null;
    }
  }
}

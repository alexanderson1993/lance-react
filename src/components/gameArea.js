import React, { Component } from "react";
import ObjectsContainer from "../containers/objects";
import { Subscribe } from "unstated";
import clientEngine from "../lance";

window.clientEngine = clientEngine;
class GameArea extends Component {
  state = {};
  start = () => {
    clientEngine.start();
    this.setState({ started: true });
  };
  render() {
    const { started } = this.state;
    return (
      <div>
        {!started && <button onClick={this.start}>Start</button>}
        <Subscribe to={[ObjectsContainer]}>
          {({ state: { paddle1, paddle2, ball } }) =>
            paddle1 && paddle2 && ball ? (
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  background: "black",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "10px",
                    height: "50px",
                    background: "white",
                    left: paddle1 ? `${paddle1.position.x}px` : "0px",
                    top: paddle1 ? `${paddle1.position.y}px` : "0px"
                  }}
                  className="paddle1"
                />
                <div
                  style={{
                    position: "absolute",
                    width: "10px",
                    height: "50px",
                    background: "white",
                    left: paddle1 ? `${paddle2.position.x}px` : "0px",
                    top: paddle1 ? `${paddle2.position.y}px` : "0px"
                  }}
                  className="paddle2"
                />
                <div
                  style={{
                    position: "absolute",
                    width: "5px",
                    height: "5px",
                    background: "white",
                    left: ball ? `${ball.position.x}px` : "0px",
                    top: ball ? `${ball.position.y}px` : "0px"
                  }}
                  className="ball"
                />
              </div>
            ) : null
          }
        </Subscribe>
      </div>
    );
  }
}
export default GameArea;

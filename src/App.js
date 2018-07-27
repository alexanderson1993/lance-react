import React, { Component } from "react";
import logo from "./logo.svg";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Query
          query={gql`
            {
              networkStatus @client {
                isConnected
              }
            }
          `}
        >
          {({ data }) => {
            return (
              <p>
                Connection status: {data.networkStatus.isConnected.toString()}
              </p>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;

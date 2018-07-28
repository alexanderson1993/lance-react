# React Lance Demo

This is a small test project to see if it is possible to easily use React as a
render target for [Lance.gg](http://lance.gg) games. This uses the standard
Lance Pong example game. My purpose was several fold:

- Make it possible to selectively start a lance Client when a component is
  mounted. Regretably, there is no way to stop it once it has started, but I
  have made it so it won't reinitialized if the component is mounted again.
- Provide a central store for accessing the data from Lance with an easy API for
  updating that store.
- Use React to render the data from the central store to show the game data.

## Set Up

It's pretty straightforward:

```
git clone https://github.com/alexanderson1993/lance-react
cd lance-react
npm install
npm start
```

## How it works

Lance is set up like usual, with an engine on both the client and the server.
However, instead of using a renderer to update the DOM or a THREE view, it sends
the information to an Unstated container. This container holds the global state
which can be accessed by any React component in the tree. The GameView component
grabs the data and renders it to the DOM using React.

# React Lance Demo

This is a small test project to see if it is possible to easily use React as a
render target for [Lance.gg](http://lance.gg) games. My purpose was several
fold:

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

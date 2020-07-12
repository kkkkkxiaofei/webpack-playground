const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Provider } = require('@dummmy/react-redux');
const { createStore } = require('@dummmy/redux');
// const appReducer = require('./reducer');
import appReducer from './reducer';
const App = require('./App');

const store = createStore(
  appReducer, {}
);

const output = ReactDOMServer.renderToString((
  <Provider store={store}>
    <App />
  </Provider>
));

console.log(output);

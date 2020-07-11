import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from '@dummmy/react-redux';
import { createStore } from '@dummmy/redux';
import appReducer from './reducer';
import App from './App';

const store = createStore(
  appReducer, {}
);

const output = ReactDOMServer.renderToString((
  <Provider store={store}>
    <App />
  </Provider>
));

console.log(output);

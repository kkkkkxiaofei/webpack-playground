import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import User from './components/User';
import Product from './components/Product';

const root = document.getElementById('root');

render(<App />, root);

if (module.hot) {
  module.hot.accept('./components/App.js', function() {
    const NewApp = require('./components/App.js').default;
    render(<NewApp />, root);
  })  
}
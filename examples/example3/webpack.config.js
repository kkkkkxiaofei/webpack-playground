var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'example3',
    publicPath: 'http://localhost:3001/'
  },
  mode: 'development'
};
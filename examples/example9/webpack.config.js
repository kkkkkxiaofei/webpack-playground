const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: {
          loader: './mdLoader.js',
          options: { placeholder: '#' }
        }
      },
      {
        test: /\.md$/,
        use: {
          loader: './fileLoader.js'
        }
      }
    ]
  },
  mode: 'development'
}
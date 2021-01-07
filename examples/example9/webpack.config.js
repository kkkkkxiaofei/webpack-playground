const path = require('path');
const MainfestPlugin = require('./plugins/mainfestPlugin');

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
          loader: './loaders/mdLoader.js',
          options: { placeholder: '#' }
        }
      },
      // {
      //   test: /\.md$/,
      //   use: {
      //     loader: './loaders/fileLoader.js'
      //   }
      // }
    ]
  },
  plugins: [new MainfestPlugin()],
  mode: 'development'
}
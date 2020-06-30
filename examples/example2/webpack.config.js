var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sub-main.js',
    library: 'micro-app',
    libraryTarget: 'umd',
    publicPath: 'http://localhost:3001/example8/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  // externals: {
  //   react: {
  //     root: 'React',
  //     umd: 'react',
  //     commonjs2: 'react',
  //     commonjs: 'react'
  //   }
  // },
  mode: 'development'
};
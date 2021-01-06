const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    dashboard: path.resolve(__dirname, 'pages/Dashboard/index.js'), 
    campaign: path.resolve(__dirname, 'pages/CampaignPage/index.js'),
    listing: path.resolve(__dirname, 'pages/ListPage/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   filename: 'index1.html',
    //   chunks: ['campaign']
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   filename: 'index2.html',
    //   chunks: ['listing']
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  }
};
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    entry1: './entry',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'production',
  optimization: {
		usedExports: true, // enable tree-shaking for exports,
    minimize: true,
	},
  devtool: false
}
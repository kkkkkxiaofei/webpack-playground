const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      minSize: 0,
      minChunks: 3,
      cacheGroups: {
        helpers: {
          // enforce: true,
          name: 'helpers',
          chunks: 'all',
          test: /(helper)/,
        },
        shared: {
          // enforce: true,
          name: 'shared',
          chunks: 'all',
          test: /(shared)/,
        }
      }
    }
  }
}
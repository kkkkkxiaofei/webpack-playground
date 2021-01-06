const path = require('path');

module.exports = {
  entry: './src/MD.md',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.md$/,
  //       use: {
  //         loader: './loader.js',
  //         options: { name: 'md to dom' }
  //       }
  //     }
  //   ]
  // }
}
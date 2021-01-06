const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  };
  if (stats.hasErrors()) {
    console.log(new Error(stats.toJson().errors));
  };
  console.log('Completed!')
});
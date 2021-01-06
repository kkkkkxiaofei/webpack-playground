const { getOptions } = require('loader-utils');

const loader = source => {
  console.log(getOptions(this));
  return `exports.name = 'foo bar'`;
};

module.exports = loader;
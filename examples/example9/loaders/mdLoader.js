const { getOptions } = require('loader-utils');

const loader = source => {
  console.log(getOptions(this));
  const lines = JSON.stringify(source.split('\n'));
  return `exports.lines = ${lines}`;
};

module.exports = loader;
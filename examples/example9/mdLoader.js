const loader = source => {
  return `exports.name = 'foo bar'`;
};

module.exports = loader;
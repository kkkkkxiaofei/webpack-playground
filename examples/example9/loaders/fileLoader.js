const loader = source => {
  const withoutMD = source.replace(/#/g, '');
  return `exports.lines = ${withoutMD}`;
};

module.exports = loader;
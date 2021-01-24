const isString = require('../shared/isString');
const isArray = require('../shared/isArray');

module.exports = obj => (isString(obj) || isArray(obj)) ? [].concat(obj) : 'UnknownType2';

console.log('loading common-js ...');

let version = 1;

exports.version = version;

const addVersion = function() {
  version = version + 1;
};

const getVersion = function() {
  return version;
}

exports.addVersion = addVersion;

exports.getVersion = getVersion;

const des = { name: 'object variable' };

exports.default = des;
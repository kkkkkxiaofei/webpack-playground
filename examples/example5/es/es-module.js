console.log('loading es-module ...');

let version = 1;

const addVersion = () => { version += 1 };

const getVersion = () => version;

const des = { name: 'object variable' };

export {
  version,
  addVersion,
  getVersion,
}

export default des;
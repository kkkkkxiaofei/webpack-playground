const mod1 = require('./common-js');
const mod2 = require('./common-js');

console.log('mod1 === mod2', mod1 === mod2);

console.log('=version0=', mod2.version, mod2.getVersion());

mod2.addVersion();

console.log('=version1=', mod2.version, mod2.getVersion());

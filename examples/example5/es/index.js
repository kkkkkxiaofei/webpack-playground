console.log('runing index ...');

import mod1 from './es-module';

import mod2, { version, addVersion, getVersion } from './es-module';

console.log('mod1 === mod2', mod1 === mod2);

console.log('=version0=', version, getVersion());

addVersion();

console.log('=version1=', version, getVersion());
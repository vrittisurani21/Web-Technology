os-core module//

 const os=require('os');
 console.log(os.freemem());

const os=require('os');
console.log(os.cpus());



URL-core module//
 const url=require('url');
 const path="http://rajvisadatiya/index.abc?name=r&age=29&roll no=313";
 const q=url.parse(path.false);
 console.log(q);

 //EVENTS-core odule//
const EventEmitter = require('node:events');

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
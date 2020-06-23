const EventEmitter = require('events'); //import gibi düşünülebilir require

//CREATE CLASS 
class MyEmitter extends EventEmitter {}

//INIT OBJECT
const myEmitter =  new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

//INIT EVENT
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
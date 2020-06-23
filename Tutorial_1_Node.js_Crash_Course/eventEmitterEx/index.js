const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
//output:  Called Listener { id: '12c39de6-f0a8-4568-8110-7b2f69f5e992', msg: 'Hello World' }
logger.log('Hi');
//output:  Called Listener { id: '6268bfb8-b2de-4850-8656-b454ee56f1f9', msg: 'Hi' }
logger.log('Hello');
//output:  Called Listener { id: '3dd5555e-aa86-41e6-aa2e-4c63e123a8b2', msg: 'Hello' }
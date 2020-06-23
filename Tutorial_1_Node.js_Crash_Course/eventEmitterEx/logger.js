const EventEmitter = require('events') ///require, import gibi düşünülebilir 
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg){
        console.log('log funct working');
        //Call event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

module.exports = Logger;  //module.exports  ile belirtilen class dışarıdan require(import) edilebilir 
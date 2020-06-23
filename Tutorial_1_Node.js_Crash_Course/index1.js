//class obj exporting example2
const MyPerson = require('./person2'); //import kullanılamıyor bu yüzden import yerine require ile iş görülür

const person1 = new MyPerson('john Doe', 30);

person1.greeting();





//map obj exporting  example1
//const person = require('./person2');
//console.log(person.name);
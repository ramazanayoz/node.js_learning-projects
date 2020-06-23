var calc = require('./calc.js');

result = calc.add(4,5); // module.exports.add = add için kullanım
console.log("The output is " + result); 

result = calc(5,5); // module.exports = add için kullanım
console.log("The output is " + result); 


result = calc.sub(5,4);
console.log("The output is " + result); 



//=============================================
var fs = require('fs');

//dosyayı text olarak okur
fs.readFile('step2/calc.js','utf8',function(err,data){
    console.log(data);
})


fs.writeFile("step2/calc1.js", 'console.log("done")', function(err){
    console.log("Data Saved");
})

fs.appendFile("step2/calc1.js", '\n console.log("appended")', function(err){
    console.log("Data saved");
});


fs.unlink("step2/calc1.js", function(err){
    console.log('Deleted');
});
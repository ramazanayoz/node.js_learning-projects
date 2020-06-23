const fs = require('fs');
const path = require('path');

//callback method
//1.kullanım şekli err => {}
//2.kullanım şekli (err) => {}
//3.kullanım şekli function(err) {}





//Create and write to file
fs.writeFile(
    path.join(__dirname, 'test', 'hello.txt'),
    'Hello World',
    err =>{
        if(err) throw err;
        console.log('File written to...');

        //File Append
        fs.appendFile(
            path.join(__dirname, '/test', 'hello.txt'),
            ' I love node.js',
            err => {
                if(err) throw err;
                console.log('File written to...');
            }
        )
    }
)


//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data);
});


//Rename File
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err =>{
        if(err) throw err;
        console.log('File renamed...');
    }
);
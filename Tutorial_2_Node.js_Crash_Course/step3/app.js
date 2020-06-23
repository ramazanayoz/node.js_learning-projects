//npm install express

const express = require('express');

const app = express();

app.get('/',function(req,res){
    //http://localhost:9000
    console.log("Hello world");
    res.send('Hello World');
});

app.get('/alien', function(req, res){
    //http://localhost:9000/alien?myId=20
    const id = req.query.myId;
    
    res.send("Welcome back allien "+ id);
});

app.get('/alien/:myId', function(req, res){
    //http://localhost:9000/alien/25
    const id = req.params.myId
    res.send('Hey Navin '+ id);
})


app.listen(9000,function(res,req){ 
    console.log("running");
});


var http = require('http');
const { Http2ServerResponse } = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Context-Type' : 'text/html'});
    res.end('Welcome Back Alien!!!');
}).listen(8080)




http.createServer(function(req,res,){})
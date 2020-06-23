const http = require('http');
const path = require('path');
const fs = require('fs');
const { Console } = require('console');

const server = http.createServer((req,res) =>  {
    if(req.url == '/'){
        fs.readFile(
            path.join(__dirname, 'public', './index.html'),
            (err,content) =>{ //callback fonk
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        )
    }

    if(req.url == '/about'){
        fs.readFile(
            path.join(__dirname, 'public', './about.html'),
            (err,content) =>{ //callback fonk
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        )
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





//NODEMON DEPENCİES YÜKLEDİK BU SAYEDE BROWSERDAKİ DEĞİŞİKLİĞİ LİVE OLARAK GÖRÜRÜZ
//nodemon kulllanmak için package.json dosyasına  
//"start": "node createServer_ex/index",
//"dev": "nodemon createServer_ex/index"
//ekledik
//çalıştırmak için konsola 
//npm run dev yazdık
//nodemon index yazdık
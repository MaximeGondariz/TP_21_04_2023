import { createServer } from "http";
const hostname = 'localhost';
const port = '8000';
import { readFile } from 'fs';

const server = createServer((req, res) => {
    const url = req.url.replace('/', '');
    if(url === ""){
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
    
        

        readFile('./view/home.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }else if(url === "assets/css/style.css"){
        res.writeHead(200, {
            "Content-Type": "text/css",
        });

        readFile('./assets/css/style.css', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }else if(url === "assets/js/home.js"){
        res.writeHead(200, {
            "Content-Type": "text/javascript",
        });

        readFile('./assets/js/home.js', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }else{
        res.end("ERROR 404, NO PAGE FOUND");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
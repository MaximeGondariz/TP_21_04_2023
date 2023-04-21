const http = require("http");
const hostname = 'localhost';
const port = '8000';
let fs = require('fs');

const data = JSON.parse(fs.readFileSync("./Data/students.json"));
const students = data.students

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    const url = req.url.replace('/', '');
    if(url === ""){
        fs.readFile('./view/home.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                fs.readFile('./assets/css/style.css', null, function (error, data) {
                    if (error) {
                        res.writeHead(404);
                        res.write('Whoops! File not found!');
                    } else {
                        res.write(data);
                    }
                });
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
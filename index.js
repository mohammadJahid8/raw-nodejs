const http = require('http');
const fs = require('fs');
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            ContentType: 'text/html'
        });
        res.write('<p>Welcome to Full Stack Development</p>');
        res.end();
    } else if (req.url == '/read') {
        fs.readFile('first.txt', (err, data) => {
            if (err) {
                res.write("Failed to read data");
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    } else if (req.url == "/write") {
        fs.readFile('first.txt', (err, data) => {
            if (err) {
                res.write("Failed to read data");
                res.end();
            } else {
                fs.writeFile('second.txt', data, (err) => {
                    if (err) {
                        res.write("data written failed");
                        res.end();
                    } else {
                        res.write("data written successfully");
                        res.end();
                    }
                })
            }
        })
    } else if (req.url == '/append') {
        fs.appendFile('first.txt', "No! It will be full not pull!😑", (err) => {
            if (err) {
                res.write("Failed to append data");
                res.end();
            } else {
                res.write("siccess");
                res.end();
            }
        })
    }
    else if (req.url == '/delete') {
        fs.unlink('second.txt', (err) => {
            if (err) {
                res.write("Failed to append data");
                res.end();
            } else {
                res.write("successfully deleted");
                res.end();
            }
        })
    }
});

server.listen(PORT);
console.log(`server is running at ${PORT}`);

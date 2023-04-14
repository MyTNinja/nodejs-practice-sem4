//Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

let fs = require('fs');
let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
    let urlObject = url.parse(req.url, true);
    let filePath = "." + urlObject.pathname;

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

//http://localhost:8080/summer.html
//http://localhost:8080/winter.html
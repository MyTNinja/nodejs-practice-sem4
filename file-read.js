let fs = require('fs');
let http = require('http');

http.createServer(function (req, res) {
    fs.readFile('file.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

//http://localhost:8080/
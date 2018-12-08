var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.listen(9000, function () {
    console.log('running');
})

server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./routes/index.html', 'utf-8', function (err, data) {
            if (err) {
                console.error(err);
            }
            res.end(data);
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./lib/public.html', 'utf-8', function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
});

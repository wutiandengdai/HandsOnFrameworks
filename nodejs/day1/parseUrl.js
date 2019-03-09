var url = require('url');
var http = require('http');
var fs = require('fs');

var adr = 'http://localhost:8080/?year=2019&month=FEB';
var query = url.parse(adr, true);
console.log(query.pathname);
console.log(query.host);
console.log(query.protocol);
console.log(query.search);

var q = query.query;
console.log(q.month);

//http://localhost:8080/helloworld
http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var pathname = 'day1' +q.pathname + '.html';
    console.log(pathname);
    
    fs.readFile(pathname, function(err, data){
        if(err){
            res.writeHead(404, {'content-type':'text/html'});
            return res.end('404 File not found.')
        }
        console.log(data);
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data.toString());
        res.end();
    });
}).listen(8080);
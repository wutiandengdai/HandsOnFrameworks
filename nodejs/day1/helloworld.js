var http = require('http');
var url = require('url');

var clock = require('./clockmodule');

//http://localhost:8080/?year=2017&month=July
http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'});
    res.write('Hello World!\n');
    res.write('My clock is at : ' + clock.myClock() + '\n');
    
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end();

}).listen(8080);
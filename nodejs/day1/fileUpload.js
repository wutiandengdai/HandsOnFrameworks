/**
 * Prestep : npm install formidable,
 * which will create a node_modules directory with target module under your project root
 */
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');

http.createServer(function(req, res){
    //file uploaded
    if(req.url == '/fileupload'&& req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });

    }else{
        fs.readFile('day1/fileupload.html', function(err, data){ 
            if(err){
                res.writeHead(404, {'content-type':'text/html'});
                res.end('404 not found');
            }
    
            res.writeHead(200, {'content-type':'text/html'});
            res.write(data.toString());
            res.end();
        });
    }
}).listen(8080);

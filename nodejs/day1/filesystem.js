var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    //the path is from project folder
    fs.readFile('day1/helloworld.html','utf8', function(err, data){
        console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.toString());
        res.end();
      });
}).listen(8080);

/**
 * File creation 1, when append file does not exist yet.
 */
fs.appendFile('day1/helloworld-ap.txt', 'Hello world from day1, created by append.', function(err){
    if(err) throw err;
    console.log('Saved !');

    fs.appendFile('day1/helloworld-ap.txt', '\nHello world again!', function(err){
        if(err) throw err;
        console.log('Updated !');
    });
    
});

/**
 * File creation 2, when open a file with write mode and file does not exist.
 */
fs.open('day1/hellowrld-op.txt','w', function(err, data){
    if(err) throw err;
    console.log('Saved !');
});

/**
 * File creation 3, when write file does not exist.
 */
fs.writeFile('day1/helloworld-wr.txt','Hello world from day1, created by write.', function(err, data){
    if(err) throw err;
    console.log('Saved !');

    fs.open('day1/helloworld-wr.txt','r', function(err, data){
        if(err) throw err;
        console.log(data);
        
        fs.writeFile('day1/helloword-wr.txt', 'Hello world from day1.', function(err, data){
            if(err) throw err;
            console.log('Updated !')

            fs.rename('day1/helloword-wr.txt','day1/temp.txt', function(err){
                if(err) throw err;
                console.log(data);
            
                fs.unlink('day1/temp.txt', function(err){
                    if(err) throw err;
                    console.log('File Removed!');
                });
            });
        });

    });
});


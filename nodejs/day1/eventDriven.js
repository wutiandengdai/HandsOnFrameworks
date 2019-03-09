var events = require('events');
var fs = require('fs');

var emitter = new events.EventEmitter();
emitter.on('Meao', function(){
    console.log('They sent a cat!');
});
emitter.emit('Meao');



fs.open('day1/helloworld.html', 'r', function(err, data){
    if(err) throw err;
    console.log('File opened.')
});

var rs = fs.createReadStream('day1/helloworld.html');
rs.on('open', function(){
    console.log('Pandora is open!');
});

fs.open('day1/helloworld.html', 'r', function(err, data){
    if(err) throw err;
    console.log('File opened.')
});
exports.myClock = function(){
    var dt = new Date();
    var t = dt.getHours() + ':' + (dt.getMinutes()+5) +':' + dt.getSeconds();
    return t;
}

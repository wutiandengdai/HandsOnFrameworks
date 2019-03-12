var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
    dbNew = db.db('todolist');
    console.log("DB created!");

    dbNew.createCollection('Categories', function(err, res){   
        if(err) throw err;
        console.log('Collection Created!');
        db.close();
    });

    //or dbNew.collection('Categories').drop(function(err,delOk))
    dbNew.dropCollection('Categories', function(err, delOk){
      if(err) throw err;
      if(delOk){
        console.log('Drop Collection Ok!')
      }
      db.close();
    });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
    dbNew = db.db('todolist');

    //insert
    var catObj = {name:'Finance', description: 'Things to do related to finance or income.'};
    var catObj1 = {name: 'Health', description: 'Physical health'};
    dbNew.collection('Categories').insertOne(catObj1, function(err, res){   
        if(err) throw err;
        console.log('1 Document inserted !');
        db.close();
    });

    //find one
    dbNew.collection('Categories').findOne({}, function(err, res){
        if(err) throw err;
        console.log(res.name);
        db.close();
    });

    //find all
    dbNew.collection('Categories').find({}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });

    //Column filter - find some field (assign as 1)
    dbNew.collection('Categories').find({}, {projection:{name:1}}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });

    //Column filter - find some field (exclude with 0)
    dbNew.collection('Categories').find({}, {projection:{description:0}}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });

    //Column filter - Find All other than id
    //limit the result to 1
    dbNew.collection('Categories').find({}, {projection:{_id:0}}).limit(1).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        console.log(res[0].description);
        db.close();
    });
    
    //Row filter (Query)
    dbNew.collection('Categories').find({description: 'Physical health'}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });

    //Row filter (Query) - Regular Expression
    //No quote around regular expression
    dbNew.collection('Categories').find({description:/^Th/}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });

    //Sort by name , Ascending order(1)
    dbNew.collection('Categories').find().sort({name:1}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    })

    //Sort by Description, Descending order(-1)
    dbNew.collection('Categories').find().sort({description:-1}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
    
    //delete many with regular expression
    dbNew.collection('Categories').deleteMany({description:/income/}, function(err, obj){
        if(err) throw err;
        console.log(obj.result.n);
        db.close();
    });

    //delete one with given name
    dbNew.collection('Categories').deleteOne({name:'Finance'}, function(err, obj){
        if(err) throw err;
        console.log(obj.result.n);
        db.close();
    });

    //update one
    dbNew.collection('Categories').updateOne({name:'Health'}, {$set:{description:'Mental Health'}}, function(err, res){
        if(err) throw err;
        console.log(res.result.nModified);
        db.close();
    });

    //update many with regular expression
    dbNew.collection('Categories').updateMany({description:/^Th/}, {$set:{name:'Updated Health', description:'Mental Health'}}, function(err, res){
        if(err) throw err;
        console.log(res.result.nMdified);
        db.close();
    })

});

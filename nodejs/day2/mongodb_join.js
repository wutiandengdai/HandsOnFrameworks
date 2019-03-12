var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';    //remember not to miss theend slash

MongoClient.connect(url, {useNewUrlParser:true}, function(err, db){
    if(err) throw err;
    var dbNew = db.db('todolist');

    dbNew.collection('Todo').insertOne({name:'Financial Plan', category_id:2}, function(err, res){
        if(err) throw err;
        console.log('collection created');
        db.close();
    });

    dbNew.collection('Todo').aggregate([
        {$lookup:
            {
                from: 'Categories',
                localField: 'category_id',
                foreignField: '_id',
                as: 'category'
            }
        }
    ]).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
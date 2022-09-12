var MongoClient = require('Mongodb').MongoClient;

var URL = 'mongodb+srv://kamalhossen:XDLYYTPLtg3Jqvuh@cluster0.58mjvys.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(URL, function(error){
            if (error){
                console('connect is fail');
            }
            else{
                console.log('connect is success');
            }
})
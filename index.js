var MongoClient = require('Mongodb').MongoClient;

var URL = 'mongodb+srv://kamalhossen:XDLYYTPLtg3Jqvuh@cluster0.58mjvys.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(URL, function(error, myMongoClient){
            if (error){
                console.log('connect is fail');
            }
            else{
                console.log('connect is success');
                InsertData(myMongoClient);
            }
})

function  InsertData(myMongoClient){
    var DataBaseName = myMongoClient.db('school');
   var myCollection = DataBaseName.collections('student');
   var myData ={id:'01', name:'kamal', subject:'bangla'};

    myCollection.insertOne(myData, (error)=>{
        if(error){
            console.log('Insert Data is Fail');
        }
        else{
            console.log('Insert Data is Success');
        }
    });
}
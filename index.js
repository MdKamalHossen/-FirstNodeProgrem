const url = require("url");
const {commandSupportsReadConcern} = require("mongodb/src/utils");
var mongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://kamalhossen:XDLYYTPLtg3Jqvuh@cluster0.58mjvys.mongodb.net/?retryWrites=true&w=majority";


mongoClient.connect(URL, (error, myMongoClient)=>{
    if(error){
        console.log('Connect is fail');
    }
    else{
        console.log('Connect is Success');
        // insertData(myMongoClient);
        // deleteData(myMongoClient);
        // allDataDelete(myMongoClient);
        // findWithoutCond(myMongoClient);
        findWithCondition(myMongoClient);
    }
})
        // data insert function create

function  insertData(myMongoClient){
    var databaseName = myMongoClient.db('Employee');
    var tableCollection = databaseName.collection('employees');

       var myData = {id:'04', name:'joynal Jossen', designation:' Engineer', Salary:'12000'};


    tableCollection.insertOne(myData,function (error){
        if(error){
            console.log('Data insert Fail');
        }
        else{
            console.log('Data insert Success');
        }
    })
}


// this is delete function method using

function  deleteData(myMongoClient){
    var myDatabese = myMongoClient.db('Employee');
    var collectionData = myDatabese.collection('employees');

    var myData = {id:'02'};
    collectionData.deleteOne(myData, (error)=>{
        if(error){
            console.log('Data Delete Fail');
        }else{
            console.log('Data Delete Success');
        }
    } )

}


// data all delete in database

function  allDataDelete(myMongoClient){
    var empDatabase = myMongoClient.db('Employee');
    var colletionEmpData = empDatabase.collection('employees');

    colletionEmpData.deleteMany((error, dataObj)=>{
        if(error){
            console.log('Data Delete Fail ');
        }
        else{
            console.log("All Data delete is success:",dataObj);
        }
    })
}
// findOne method using without condition

function findWithoutCond(myMongoClient){
    var databaseName = myMongoClient.db('Employee');
    var empCollected = databaseName.collection('employees');
    const FindObj = {};
    empCollected.findOne(FindObj, (error, result)=>{
        console.log(result);
    })
}
//findOne Method using in condition

function  findWithCondition(myMongoClient){
    var databaseServer = myMongoClient.db('Employee');
    var infoData = databaseServer.collection('employees');

    const findObj = {id: "01"};
    infoData.findOne(findObj, (error, result)=>{
        console.log(result);

    })
}
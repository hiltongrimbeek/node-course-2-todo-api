//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return console.log('Unable to connect to MongoDb')
  }
  console.log('Connected to MongoDb Server');

  const db = client.db('TodoApp');
/*
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert To Do:' + err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
*/

  db.collection('Users').insertOne({
    name: 'hilton',
    age: 71,
    location: 'Araluen'
    }, (err,result)=>{
      if(err){
      return console.log('Unable to insert User:' + err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
  client.close();
    });
});
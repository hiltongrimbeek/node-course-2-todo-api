//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return console.log('Unable to connect to MongoDb')
  }
  console.log('Connected to MongoDb Server');

  const db = client.db('TodoApp');
/*
  db.collection('Todos').find({_id}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{

  })

 db.collection('Todos').find().count().then((count)=>{
  console.log(`Todos count: ${count}`);
  }, (err)=>{

})
*/

db.collection("Users").find({name : "Jill"}).toArray().then((list)=>{
  console.log(JSON.stringify(list,undefined,2));
}).catch((err)=>{
  console.log(err);
});

  client.close();
});

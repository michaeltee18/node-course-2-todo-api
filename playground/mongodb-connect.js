//const MongoClient = require('mongodb').MongoClient;
//destructoring to make new variables off of objects
// var user = {name: 'mike', age: 33};
// var {name} = user;
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//the second arguement could be an AWS service
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');



  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON. stringify(result.ops), undefined, 2);
  // });


  // //Insert new doc into users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Michael',
  //   age: '33',
  //   location: 'Alexandria, VA'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  //closes the connection to the db
  db.close();
});

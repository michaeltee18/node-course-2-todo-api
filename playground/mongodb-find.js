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

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b6749cf6e0fafbb96f0b670')
  //    }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Tyrone'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=> {
    console.log('Unable to fetch users', err);
  });
  //closes the connection to the db
  // db.close();
});

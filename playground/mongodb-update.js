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

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b6761b36e0fafbb96f0bc5a')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

// NOTE: challege is to update document in Users collection by changing name and incrementing the age
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b6723681d89c1414cab7775')
}, {
  $set: {
    name: 'Mike2'
  },
  $inc: {age: 1}
},  {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});
  //closes the connection to the db
  // db.close();
});

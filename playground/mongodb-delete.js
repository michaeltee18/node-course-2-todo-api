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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}). then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete --> shows the document that was deleted and displays to use so that it can be added back to the db if necessary
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany documents with name: 'Michael'
  // db.collection('Users').deleteMany({name: 'Michael'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete by _id
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b881611e66924406897c452')
  }).then((result) => {
    console.log(result);
  })




  //closes the connection to the db
  // db.close();
});

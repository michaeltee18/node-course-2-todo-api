const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove() --> you can't pass in an empty arguement to remove everything

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//this also returns the document  so you can do something if you need
//Todo.findOneAndRemove --> takes query objects
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ba52e7a35d2b7db1998d007'}).then((todo) => {

});

Todo.findByIdAndRemove('5ba52e7a35d2b7db1998d007').then((todo) => {
  console.log(todo);
});

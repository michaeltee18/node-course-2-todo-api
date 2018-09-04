const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b89a6182d829acc1f16fe0611';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//Query user collection

//User.findById, user not found, user found, handle any errors that occur

// var userId = '5b8845efec13445442b9a325';
//
// User.findById(userId).then((user) => {
//   if(!user){
//     return console.log('User not found');
//   }
//   console.log('User by Id', user);
// }).catch((e) => console.log(e));
//

//Andrew's solution:
User.findById('5b8845efec13445442b9a325').then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2))
}, (e) =>{
  console.log(e);
})
 

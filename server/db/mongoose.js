var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp')

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://Training:Yoehun#16@ds145072.mlab.com:45072/nodejs-todo-api'
};
mongoose.connect( db.localhost || db.mlab);

module.exports = {mongoose};

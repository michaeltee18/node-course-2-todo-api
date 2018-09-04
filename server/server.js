var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
//  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/123
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //validate id using isValid
    //404 if it isn't validate send back empty second
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });

  //findById then query Todos collection
    //success
      //if todo - send it back
      //if no todo - send back 404 with empty body

    //error
      //400 - and send empty body back
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};

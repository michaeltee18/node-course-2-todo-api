const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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

app.delete('/todos/:id', (req, res) => {
  //get the ID like above
  var id = req.params.id;
  //validate the ID. not valid return 404
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }


  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
      res.send({todo});
  }).catch((e) => {
    return res.status(400).send();
  });
});

//use hatch to update resources
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }

  //check the completed value to set completed at.
  if (_.isBoolean(body.completed) && body.completed){
    //will run if true, else run something else or if it's not true.  .getTime gets javascript timestamp in milliseconds. Jan 1 1970 base unix
    body.completedAt = new Date().getTime();
  }
  else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};

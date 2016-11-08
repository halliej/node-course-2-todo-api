
const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('582226e4213a27bb5ff0875b').then((todo) => {
    console.log(todo);
});
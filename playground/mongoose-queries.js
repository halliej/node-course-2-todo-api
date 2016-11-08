
const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

// var id = '582200c20ab2cc12b821682c';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });


// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo By ID:', todo);
// }).catch((e) => console.log(e));

var {User} = require('./../server/models/user');

var id = '5820bf22cf8d5a1361e273f1';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found!');
    }
    console.log('User By ID', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));


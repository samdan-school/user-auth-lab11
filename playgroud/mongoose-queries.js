const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5adb532725ae252d380dbaa811';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not found!');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('A todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo by id:', todo);
// }).catch((e) => console.log(e));

// ex
let uId = '5adac512f6b0920ad0b12dad';

User.findById(uId).then((user) => {
    if(!user) {
        return console.log('User not found!');
    }
    console.log('User: ', user );
}).catch((e) => console.log(e));

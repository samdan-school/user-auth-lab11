const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5adb532725ae252d380dbaa811';

// Todo.remove({}).then( (result) => {
//     console.log(result);
// });

Todo.findOneRemove({_id: '5adc068b094a2b5164ceb92b'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5adc068b094a2b5164ceb92b').then((todo) => {
    console.log(todo);
});
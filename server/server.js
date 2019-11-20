require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');

let app = express();

app.use(bodyParser.json());
let port = process.env.PORT;

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }).catch((e) => {
        res.status(400).send(e);
    })
});

// Get /todos/:id
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    // Validate Id using isValid
    // 404 - send back empty send
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    // findById
    // Success
    // if todo - send it back
    // if no todo - send back 404 with empty body
    // Error
    // 400 - and send empty body
    Todo.findById(id)
        .then((todo) => {
            if (!todo) {
                res.status(404).send();
            }
            res.send({todo});
        })
        .catch((e) => res.status(400).send());

});

app.delete('/todos/:id', (req, res) => {
    // Get the ID
    let id = req.params.id;

    // Validate the id -> not valid return 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // Remove todo by id
    // Success
    // if no doc, send 404
    // if doc, send doc back with 200
    // Error
    // 400 with empty body
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        return res.send({todo});
    }).catch((e) => {
        return res.status(400).send(e);
    });
});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime()
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

// Post /users
app.post('/users', (req, res) => {
    let info = _.pick(req.body, ['email', 'password']);
    let user = User(info);

    user.save()
        .then((user) => {
            return user.generateAuthToken();
        })
        .then((token) => {
            res.header('x-auth', token).send(user);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});


app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.post('/users/login', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password)
        .then((user) => {
            user.generateAuthToken()
                .then((token) => {
                    res.header('x-auth', token).send(user);
                });
        })
        .catch((err) => {
            res.status(400).send();
        });
});

app.listen(port, () => {
    console.log(`App started on ${port}`);
});

module.exports = {app};




















const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server!');

    const mdb = db.db('TodoApp');

    // mdb.collection('Todos').findOneAndUpdate({
    //     text: 'Something to do'
    // }, {
    //     $set: {
    //         text: 'Eat lunch',
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    mdb.collection('User').findOneAndUpdate({
        name: 'Nani'
    }, {
        $set: {
            name: 'Samdan'
        },
        $inc: {
            age: 5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});

































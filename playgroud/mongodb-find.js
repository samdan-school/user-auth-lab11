const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server!');

    const mdb = db.db('TodoApp');

    // mdb.collection('Todos').find({
    //     _id: ObjectId('5acf0b562dcfe608884d98c9')
    // }).toArray()
    //     .then((docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch((err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // mdb.collection('Todos').find({
    //     // _id: ObjectId('5acf0b562dcfe608884d98c9')
    // }).count()
    //     .then((count) => {
    //         console.log(`Todos count ${count}`);
    //     })
    //     .catch((err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    mdb.collection('User')
        .find({
            name: 'Samdan'
        })
        .toArray()
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        .catch((error) => {
            console.log('Nani');
        });

    db.close();
});
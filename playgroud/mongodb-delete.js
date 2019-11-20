const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server!');

    const mdb = db.db('TodoApp');

    // deleteMany

    // mdb.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result.result);
    // });

    // deleteOne

    // mdb.collection('Todos').deleteOne({
    //     "text" : "Eat lunch"
    // }).then((result) => {
    //     console.log(result.result);
    // });

    // findOneAndDelete

    // mdb.collection('Todos').findOneAndDelete({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // mdb.collection('User')
    //     .deleteMany({
    //         name: 'Samdan'
    //     })
    //     .then((result) => {
    //         console.log(result.result);
    //     });

    mdb.collection('User')
        .findOneAndDelete({
            _id: ObjectId("5acf37e9693a346ec7d48156")
        }).then((result) => {
            console.log(result);
    });


    db.close();
});
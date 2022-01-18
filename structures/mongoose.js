let { connect, Promise, connection } = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            useFindAndModify: false,
            family: 4,
            poolSize: 5,
            connectTimeoutMS: 10000
        };

        connect('mongodb+srv://Juanyto:Juanyto007@cluster0.wnyww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', dbOptions);
        Promise = global.Promise;

        connection.on('connected', () => {
            console.log('Connected to MongoDB Successfully!');
        });

        connection.on('err', err => {
            console.error(`Error Occured From MongoDB: \n${err.message}`);
        });

        connection.on('disconnected', () => {
            console.warn('Connection Disconnected!');
        });
    }
};
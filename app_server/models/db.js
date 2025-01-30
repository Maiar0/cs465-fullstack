const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

// Build the connection string and set the connection timeout (in milliseconds).
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }), 1000);
};

// Monitor connection events
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Windows-specific listener
if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('SIGINT', () => {
        process.emit('SIGINT');
    });
}

// Configure for graceful shutdown
const gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

// Event listeners to handle graceful shutdowns
// Shutdown invoked by nodemon signal
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});

// Shutdown invoked by app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});

//  Shutdown invoked by container termination
process.on('SIGTERM', () => {
    gracefulShutdown('App Shutdown');
    process.exit(0);
});
//Make Initial connection to DB
connect();
// Import Mongoodse schema
require('./travlr');
module.exports = mongoose;

const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/viresh';

mongoose.connect(mongoURL);

const db = mongoose.connection;

// Event listeners for connection status
db.on('connected', () => {
    console.log("Connected to MongoDB");
});

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB");
});

module.exports = db;

const mongoose = require('mongoose');
require("dotenv").config();

// this line is extra??
const db = mongoose.connection;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

// const DB_URI = "mongodb://localhost:27017/academy";

mongoose
.connect(process.env.DB_URI, options)
.then(() => {
        console.log("Academy DB ready to use")
    })
.catch((err) => {
        console.log(err)
    });



// These lines Extra
db.on('error', (err) => console.log('ERR:', err.message));

db.on('connected', () => console.log('MONGO CONNECTED'));

db.on('disconnected', () => console.log('MONGO DISCONNECTED'));
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/gouravdb';
mongoose.connect(mongoURL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connection sucessfull bro");
});

module.exports = db;
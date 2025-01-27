// const exp = require('constants');
// const express = require('express');
// const app = express();
// const db = require('./db');
// app.get('/',function(req,res){
//     res.send("server is running welcome homies");
// });

// app.listen(3000,function(){
//     console.log("running on port 3000")
// });

// console.log("hello world");
const express = require('express');
const app = express();
// const db = require('./db');
app.get('/',function(req,res){
    res.send("server is running welcome homies");
});

app.listen(3000,function(){
    console.log("running on port 3000")
});
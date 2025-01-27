const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const Person = require('./models/person');
const MenuItem = require('./models/menu');
app.get('/', function (req, res) {
    res.send("server is running welcome homies");
});

// post route to add a person

// post to add menu



const menuRoute = require('./routes/menuRoutes');
app.use('/menu',menuRoute);
// getting any specific information

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);


app.listen(3000, function () {
    console.log("running on port 3000")
});

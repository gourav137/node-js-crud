const mongoose = require('mongoose');
// define the person schema

const personSchema = new mongoose.Schema({

    name:{
type : String,
// required:true
    },
    age:{
type : Number,
    },

    // work:{
    //     type:String,
    //     // enum: ['cheif','waiter','manager'],
    //     // required:true
    // },
    mobile:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true,
        // unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        // required:true
    }

});

// crreate person model 
const Person = mongoose.model('person',personSchema);
module.exports = Person;
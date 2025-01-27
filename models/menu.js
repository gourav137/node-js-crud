const mongoose =require('mongoose');
const menuItemSchema = new mongoose.Schema({
name:{
    type:String,
},
price:{
    type:Number
},
taste:{
    type:String,
    enum:["sweet","spicy","sour"]
}
});
const menuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = menuItem;
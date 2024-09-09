const mongoose = require('mongoose');

// define a schema 
const userSchema = new mongoose.Schema({
       name:{
        type:String
       },
       email:{
        type:String
       },
       password:{
        type:String
       },
       createdAt:{
        type:Date,
        default:Date.now
       },
       updatedAt:{
        type:Date,
        default:Date.now
       }
});

// create a model
module.exports = mongoose.model('User',userSchema,'users');

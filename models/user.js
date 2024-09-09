const mongoose = require('mongoose');

// define a schema 
const userSchema = new mongoose.Schema({
    id: Number,
    name:String,
    email:String,
    password:String,
    createdAt:String,
    updatedAt:String
});

// create a model
const User = mongoose.model('User',userSchema,'users');

module.exports = User;

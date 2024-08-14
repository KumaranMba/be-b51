const mongoose = require('mongoose');

// define a schema
const noteSchema = new mongoose.Schema({
    id: Number,
    content: String,
    important: Boolean
});

// create a model
const Note = mongoose.model('Note',noteSchema,'notes');

module.exports = Note;


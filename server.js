const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./utilits/config');
const logger = require('./utilits/logger');
const cors = require('cors');
const notesRouter = require('./controller/notes');
const usersRouter = require('./controller/users');


mongoose.set('strictQuery',false);

// middleware
app.use(express.json());
app.use(cors());

 logger.info(`connecting to`,config.MONGODB_URI);

// connect to the database
mongoose.connect(config.MONGODB_URI)
    .then(() => {
     logger.info('Connected to MongoDB...');
    })
    .catch((err) => {
        logger.error('Error connecting to MongoDB:',err);
    });

    /*
    endpoints

    URL             Request Type        Functionality
    /api/notes      GET                 fetches all the notes
    /api/notes/10   GET                 fetches a single note
    /api/notes      POST                creates a new note based on the request data
    /api/notes/10   DELETE              deletes a note identified by id
    /api/notes/10   PUT                 replaces the entire note identified by id with the request data
    /api/notes/10   PATCH               replaces a part of the note identified by id with the request data
*/

// set the endpoints
// set the / route
app.get('/', (request, response) => {
    response.send('<h1>Notes App</h1>');
});


// app.use('/api/notes',notesRouter);
// // endpoint to fetch a single note
// app.get('/api/notes/:id', (request, response) => {
//     // get the id from the params
//     const id = request.params.id;

//     // find the note with the id in notes data
//     const note = notes.find(note => note.id == id);

//     if (note) {
//         // if such an object with the id exists
//         response.status(200).json(note);
//     } else {
//         response.status(404).json({ message: 'id does not exists' });
//     }
// });

// // endpoint to delete a note identified by id
// app.delete('/api/notes/:id', (request, response) => {
//     // get the id from the params
//     const id = request.params.id;

//     // find the note matching the id
//     const note = notes.find(note => note.id == id);

//     notes = notes.filter(note => note.id != id);

//     if (note) {
//         response.status(204).json(note);
//     } else {
//         response.status(404).json({ message: 'id does not exists' });
//     }
// });

// // endpoint to create a new note based on the request data
// app.post('/api/notes', (request, response) => {
//     notes = notes.concat(request.body);
//     response.status(201).json({ message: 'note created successfully' });
// });

// // endpoint to replace the entire note identified by id with the request data
// app.put('/api/notes/:id', (request, response) => {
//     // get the id from the params
//     const id = request.params.id;

//     // get the note to replace from the user - request body
//     const noteToReplace = request.body;

//     // find the object matching the id
//     const note = notes.find(note => note.id == id);

//     notes = notes.map(note => note.id == id ? noteToReplace : note);

//     if (note) {
//         response.status(200).json({ message: 'note replaced' });
//     } else {
//         response.status(404).json({ message: 'id does not exists' });
//     }
// });

// // endpoint to patch a part of note identified by id with the request data
// app.patch('/api/notes/:id', (request, response) => {
//     // get the id from the params
//     const id = request.params.id;

//     // get the note to replace from the user - request body
//     const noteToReplace = request.body;

//     // find the object matching the id
//     const note = notes.find(note => note.id == id);

//     notes = notes.map(note => note.id == id ? {...note, ...noteToReplace} : note);

//     if (note) {
//         response.status(200).json({ message: 'note patched' });
//     } else {
//         response.status(404).json({ message: 'id does not exists' });
//     }
// });


app.use('/api/notes',notesRouter);
app.use('/users',usersRouter);

module.exports = app;


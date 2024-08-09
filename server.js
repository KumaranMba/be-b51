const express = require('express');
const app = express();
const mongoose = require('mongoose');


// middleware
app.use(express.json());


// connect to the database
const url = `mongodb+srv://kumarandinesh0411:Dinesh0411@dineshclust.6e3d5la.mongodb.net/B51DB`;

mongoose.connect(url)
 .then(() =>{
        console.log("Connected to MongoDB...");
 } )
 .catch((err)=>{
    console.error(err);
 });
 
 // create a schema
 const noteSchema = new mongoose.Schema({
    id:Number,
    content: String,
    important:Boolean
 });

 // create a model
 const Note = mongoose.model("Note",noteSchema,"notes");
 
// set the endpoints
// set the / route
app.get('/',(request,response)=>{
   response.send("Hello World");
});

// to view all the notes
app.get('/api/notes',(request,response)=>{
    Note.find({},{})
    .then( note => {
        response.status(200).json(note);
    });
});

// //endpoint to fetch a single note
// app.get("/api/note/:id",(request,response)=>{

//     const id = request.params.id;

//     const note = notes.find(note => note.id == id);

//     if(note){
//         response.status(200).json(note);
//     }
//     else{
//         response.status(404).json({Message:"Such id does not exit"});
//     }

// });

// // endpoint to create a new note based on the request data

// app.post('/api/notes', (request,response)=>{
//    notes = notes.concat(request.body);
//     response.status(201).json({message:"notes created successfully"});
// });

// //endpoint to delete a single note from existing notes

// app.delete('/api/note/:id',(request,response)=>{
//     // identify the id with the help of request
//     const id = request.params.id;

//     // find the specific notes
//     const note = notes.find(note => note.id == id);

//     notes = notes.filter(note => note.id != id);

//     if(note){
//         response.status(200).json(note);
//     }else{
//         response.status(404).json({message:"id does not exists"});
//     }
// });

// //endpoint to replace the entire note identified by the id with the request data

// app.put('/api/notes/:id',(request,response)=>{

//     //identify the id with the request data
//     const id = request.params.id;

//     // To get the data from the request
//     const noteToReplace = request.body;
    
//     // find the object matching with the id;
//     const note = notes.find(note => note.id == id);

//      notes = notes.map(note=> note.id == id ? noteToReplace : note);

//      if(note){
//         response.status(200).json({message:"notes replaced"});
//      }else{
//         response.status(404).json({message:"id does not exists"});
//      }

// });


// //endpoint to path the specific content by identifying the id with the request data

// app.patch('/api/notes/:id',(request,response)=>{

//     //identify the id with the request data
//     const id = request.params.id;

//     // To get the data from the request
//     const noteToReplace = request.body;
    
//     // find the object matching with the id;
//     const note = notes.find(note => note.id == id);

//      notes = notes.map(note=> note.id == id ? {...note,...noteToReplace} : note);

//      if(note){
//         response.status(200).json({message:"notes patched Successfully"});
//      }else{
//         response.status(404).json({message:"id does not exists"});
//      }

// });


const HOSTNAME = "127.0.0.1";   // local host.
const PORT = 3001;

app.listen(PORT,HOSTNAME,()=>{

    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
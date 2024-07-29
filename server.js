const express = require('express');
const app = express();

// middleware
app.use(express.json());

let notes = [
    {
        id:1,
        content:"backend using node.js",
        important:true
    },
    {
        id:2,
        content:"node.js is a open source",
        important:false
    },
    {
        id:3,
        content:"simple web server using node.js",
        important:true
    },
]

// set the endpoints
// set the / route
app.get('/',(request,response)=>{
   response.send("Hello World");
});

// to view all the notes
app.get('/api/notes',(request,response)=>{
    response.json(notes);
});

//endpoint to fetch a single note
app.get("/api/note/:id",(request,response)=>{

    const id = request.params.id;

    const note = notes.find(note => note.id == id);

    if(note){
        response.status(200).json(note);
    }
    else{
        response.status(404).json({Message:"Such id does not exit"});
    }

});

// endpoint to create a new note based on the request data

app.post('/api/notes', (request,response)=>{
   notes = notes.concat(request.body);
    response.status(201).json({message:"notes created successfully"});
});

//endpoint to delete a single note from existing notes

app.delete('/api/note/:id',(request,response)=>{
    // identify the id with the help of request
    const id = request.params.id;

    // find the specific notes
    const note = notes.find(note => note.id == id);

    notes = notes.filter(note => note.id != id);

    if(note){
        response.status(200).json(note);
    }else{
        response.status(404).json({message:"id does not exists"});
    }
});

//endpoint to replace the entire note identified by the id with the request data

app.put('/api/notes/:id',(request,response)=>{

    //identify the id with the request data
    const id = request.params.id;

    // To get the data from the request
    const noteToReplace = request.body;
    
    // find the object matching with the id;
    const note = notes.find(note => note.id == id);

     notes = notes.map(note=> note.id == id ? noteToReplace : note);

     if(note){
        response.status(200).json({message:"notes replaced"});
     }else{
        response.status(404).json({message:"id does not exists"});
     }

});





const HOSTNAME = "127.0.0.1";   // local host.
const PORT = 3001;

app.listen(PORT,HOSTNAME,()=>{

    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
const express = require('express');
const app = express();

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

const HOSTNAME = "127.0.0.1";   // local host.
const PORT = 3001;

app.listen(PORT,HOSTNAME,()=>{

    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
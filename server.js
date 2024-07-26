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

const HOSTNAME = "127.0.0.1";   // local host.
const PORT = 3001;

app.listen(PORT,HOSTNAME,()=>{

    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
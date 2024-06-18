
const express = require('express');
const { request } = require('http');
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
    {
        id: 4,
        content: 'express makes backend restful painless',
        important: true
    },
    {
        id: 5,
        content: 'backend restful using nodejs will grow complex',
        important: false
    }
]

app.get('/',(request,response)=>{
    response.send("Hello World!!!");
})

// define the server hostname and port number
const HOSTNAME = "127.0.0.1";   // local host.
const PORT = 3001;



app.listen(PORT,()=>{

    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});


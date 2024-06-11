// import the module
const http = require('http');

// define the server hostname and port number
const hostname = "127.0.0.1";   // local host.
const port = 3000;

// create a server
const server = http.createServer((req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','plain/Text');
    res.end("Hello World\n");

});

// make the server to listen to the defined portnumber

server.listen(port,hostname,()=>{

    console.log(`Server running at http://${hostname}:${port}`);
});


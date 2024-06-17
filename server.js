// import the module
const http = require("http");


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
        id:4,
        content:"express makes backend restful painless",
        important:true
    },
    {
        id:5,
        content:"backend restful using nodejs will grow complex",
        important: false

    }
]


// Define the server hostname and portnumber

const hostname = "127.0.0.1"; // local host

const port = 3001;



const server = http.createServer((req,res)=>{
    
    res.statusCode = 200;
    res.setHeader('Content-Type',"Application/Json");
    res.end(JSON.stringify(notes));
});

// Make the server to listen to the defined portnumber:
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});




const fs = require('fs');

fs.readFile('./text.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);

});

function SayHello(){

    console.log("Hello");
};

SayHello();
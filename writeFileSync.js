const fs = require('fs');

const content= `session1:${new Date().toISOString()}`

try{
    fs.writeFileSync('./text.txt',content);
    
        console.log("Session written successfull");
    
}catch(error){
    console.log(error);
}


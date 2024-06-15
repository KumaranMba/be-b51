const fs = require('fs');

const content = `\n above has the detail of the seccion 
with their respective time stamp`;

fs.writeFile('./text.txt',content,{flag:"a"},err=>{
    if(err) console.log(err);
    console.log('Content written successfully');
});
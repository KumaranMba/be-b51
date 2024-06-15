const fs = require('fs/promises');

 async function readTestFile(){

    try
    {
    const data = await fs.readFile('./text.txt','utf-8');
    console.log(data);
    }
    catch(err){

        console.log(err);
    }
}

readTestFile();

function Hello(){
    console.log('Hello');
}

Hello();
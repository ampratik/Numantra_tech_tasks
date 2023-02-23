// const { read } = require('fs');
const { Readable , Writable } = require('stream');


const readableStream= new Readable({   //readable stream.
    highWaterMark:22,                 //this is the limit thats much we can store data in byte..
    read(){}
});

const writableSteam = new Writable({
    write(s){
        console.log('Writting', s.toString());
    }
})

readableStream.on('data',(chunk)=>{            //event listener function..
    console.log('data coming',chunk.toString())
    writableSteam.write(chunk)
});

//pushing data into the stream.
// readableStream.push("hey i am passing some data into readable stream buffer")



//********************************************************************* */


// const writableSteam = new Writable({
//     write(s){
//         console.log('Writting', s.toString());
//     }
// })


// writableSteam.write("Hii there am Pratik..");
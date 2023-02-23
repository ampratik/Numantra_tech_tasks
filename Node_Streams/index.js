const http = require("http");
const fs=require('fs');
const { Transform ,pipeline } = require("stream");
const   replaceWordProcessing  =require('./replaceFileProcessor');
const  upperCaseWordProcessing =require('./upperCaseWordProcessing');


const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  //*** Downloading File in bad way...
//  let file=fs.readFileSync('sample.txt');
//   return res.end(file);

  //*** Downloading file in good way... 
  //streming video using stream...
//   const readableStream=fs.createReadStream('test.mp4');
//   res.writeHead(200, { 'content-type':'video/mp4' });
//   readableStream.pipe(res);

  //*** copying big file using fs way...
//   const file =fs.readFileSync('sample.txt');
//   fs.writeFileSync('output.txt',file);

  

  //*** copy big file using stream..
//   const readStream=fs.createReadStream('sample.txt');
//   const writeStream=fs.createWriteStream('output.txt');
//   let array=[];

//   readStream.on('data',(chunk)=>{
//     //      console.log('chunks',chunk.toString())
// // ALternate line does not related to the code  ==> res.write(JSON.parse(chunk.toString()));
//     writeStream.write(chunk);
//   })


// REPLACING SPECIFIC WORDS FROM FILE USING STREAM..


const sampleFileStream =fs.createReadStream('sample.txt');
const outputWritableStream =fs.createWriteStream('outputCap.txt');

// sampleFileStream.on('data',(chunk)=>{
//     const finalString=chunk.toString().replaceAll(/ipsum/gi ,"cool").toUpperCase();

//     outputWritableStream.write(finalString);
// })


// ALTERNATE OPTION FOR ALL THOSE CODE USING PIPE AND TRANSFORM STREAM

 

//  sampleFileStream.pipe(replaceWordProcessing).pipe(upperCaseWordProcessing).pipe(outputWritableStream)

 //------------------- OR ---------------------//

 pipeline(
  sampleFileStream,
  replaceWordProcessing,
  upperCaseWordProcessing,
  outputWritableStream,
  
  (err)=>{
    if(err){
      console.log("Error handling here...",err) 
    }
})







  res.end()

});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});



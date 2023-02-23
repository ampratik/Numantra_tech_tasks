const { Transform } =require('stream');


const upperCaseWordProcessing = new Transform({
    transform(chunk,encoding,callback){
        console.log('chunk',chunk.toString());
       callback(null,chunk.toString().toUpperCase());
    }
 })


 module.exports=upperCaseWordProcessing



const { Transform } =require('stream');

const replaceWordProcessing = new Transform({
    transform(chunk,encoding,callback){
       
        const finalString=chunk.toString().replaceAll(/ipsum/gi ,"cool");
        // console.log('chunk',chunk.toString());
       callback(null,finalString)
    }
 })

 module.exports = replaceWordProcessing
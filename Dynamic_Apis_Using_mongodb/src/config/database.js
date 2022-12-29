const mongoose=require('mongoose');

//****** Primary Database ***************/

//  mongoose.set('strictQuery', false)
// mongoose.connect("mongodb://127.0.0.1/test",{
//     useNewUrlParser:true,
//     //  useUnifiedTopology:true,
//     // useCreateIndex:true
// },(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("primary database connected successfully")
//     }
// })

//******* Secondary Database ***************8******/


// mongoose.db2=mongoose.createConnection('mongodb://127.0.0.1/test2?maxPoolSize=10',(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("Secondary Database connected successfully")
//     } 
// });



// module.exports=mongoose
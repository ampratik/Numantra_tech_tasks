const express=require("express");
const bp=require("body-parser");
const app=express();
const port= process.env.PORT || 3000 ;
const route=require('./routes/index')
  

app.use(bp.json());
app.use(bp.urlencoded({extended:true}))

app.use("/",route);





app.listen(port,()=>{
    console.log(`server is connected on http://localhost:3000`)
})
const express=require("express");
const bp=require("body-parser");
const route=require("./route")
const cors=require('cors')
const app=express()

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))


app.use("/",route);

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("server is connected at " +(process.env.Port || 3000))
})
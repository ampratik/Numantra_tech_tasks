const express=require("express");
const bp=require("body-parser");
const route=require("./routes/route")
const mongoose=require("mongoose");

const app=express()

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://amPratik:Pratik6369@cluster0.tydhs.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb database is connected"))
.catch(()=>console.log(error))

app.use("/",route);

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("server is connected at " +(process.env.Port || 3000))
})
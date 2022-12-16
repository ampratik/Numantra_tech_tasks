const express=require("express");
const bp=require("body-parser");
const route=require("./routes/route")

const app=express()


app.use(bp.json())
app.use(bp.urlencoded({extended:true}))


app.use("/",route);

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("server is connected at " +(process.env.Port || 3000))
})
const express=require('express');
const  bp=require('body-parser');
  const { default: mongoose } = require('mongoose');
const app=express();
const route=require('./routes/route')
const port=process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

 
// require('./config/database')
app.use('/',route)


app.listen(port ,()=>{
    console.log(`Server is connected on Port http://localhost:${port}`)
})
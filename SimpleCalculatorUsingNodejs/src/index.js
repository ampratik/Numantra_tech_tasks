const express=require("express");
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port=process.env.PORT || 3000

// app.post("/add",(req,res)=>{
//     let a=parseFloat(req.body.a)
//     let b=parseFloat(req.body.b)
//     let result=a+b
//     res.status(200).json(result)
// })

// app.post("/sub",(req,res)=>{
//     let a=parseFloat(req.body.a)
//     let b=parseFloat(req.body.b)
//     let result=a-b
//     res.status(200).json(result)
// })

// app.post("/mult",(req,res)=>{
//     let a=parseFloat(req.body.a)
//     let b=parseFloat(req.body.b)
//     let result=a*b
//     res.status(200).json(result)
// })

// app.post("/div",(req,res)=>{
//     let a=parseFloat(req.body.a)
//     let b=parseFloat(req.body.b)
//     let result=a/b
//     res.status(200).json(result)
// })
// app.post("/mod",(req,res)=>{
//     let a=parseFloat(req.body.a)
//     let b=parseFloat(req.body.b)
//     let result=a%b
//     res.status(200).json(result)
// })

// app.post("/expo",(req,res)=>{
//     let a=parseFloat(req.body.a)
//     let b=parseFloat(req.body.b)
//     let result=a**b
//     res.status(200).json(result)
// })
 
  app.get("/Calculator",(req,res)=>{
    res.sendFile(__dirname +"/Calculator2.html")
  })

app.post("/Calculator",(req,res)=>{
  if(!req.body.num1 || !req.body.num2){
    res.send(`<h1 style= "text-align:center">Please Insert Both Numbers</h1>`)
  }
    let result=eval(req.body.num1+req.body.btn+req.body.num2)
    console.log(result)
    res.send(`<h1 style= "text-align:center">The answer is ${result}</h1>`)
})

app.listen(port ,function(){
    console.log(`server is running on http://localhost:${port}`)
})

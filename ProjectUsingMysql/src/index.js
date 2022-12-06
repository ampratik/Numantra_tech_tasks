const e = require("express");
const express=require("express");
const app=express()
// const bp = require("body-parser");
const mysql=require("mysql")


// app.use(bp.json)
// app.use(bp.urlencoded ({extended:true}))
app.use(express.json())


var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"employeedb"
});

db.connect((error)=>{
    if(!error)
        console.log("mysql database connected")
    
    else
        console.log("db connection failed /" + JSON.stringify(error,undefined,2))
    
});
// app.get('/',(req,res)=>{
//     res.send("i am from back");
// })
//to get all the employees
app.get("/getEmployee",(req,res)=>{

    const q='SELECT * FROM employee';
    console.log(q);
    db.query(q,(error,data)=>{
        if(!error){
            res.status(201).json(data)
            console.log("we got the data :",data)
        }else{
            console.log({status:false,message:error})
            res.status(500).send({status:false,message:error})
        }
    })
})
    //to get employee by name
    app.get("/employees/:id",(req,res)=>{
            db.query("SELECT * FROM employee WHERE id=?",[req.params.id],(err,rows)=>{
            if(!err)
            // console.log(rows)
            return res.status(201).send({status:true,messsge:"employee found successfully" ,data:rows})
            return res.status(500).send({status:false,message:err.message})
            
        })

});

//to delete the employee by id
app.delete("/employees/:id",(req,res)=>{
    db.query("DELETE FROM employee WHERE id=?",[req.params.id],(err)=>{
    if(!err)
    // console.log(rows)
    return res.status(200).send({status:true,messsge:"DATA deleted successfully"})
    // console.log(err.message)
    return res.status(500).send({status:false,message:err.message})
    
})

});


//inserting data into the table.
app.post("/employee",(req,res)=>{
    const q="INSERT INTO employee(`name`,`empcode`,`salary`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.empcode,
        req.body.salary
    ];
    db.query(q,[values],(err,data)=>{
        if(!err) 
        return res.status(201).json("data inserted into the table successfully");
        return res.status(400).json("unable to insert the data" +err)
    })
})
  

//update employee table

// app.put("/employee/:id",(req,res)=>{
//     const q="UPDATE employee SET `name`=? , `empcode`=? ,`salary`=? WHERE  id=?"
//     const value=[
//         req.body.name,
//         req.body.empcode,
//         req.body.salary
//     ]
//     const empId=req.params.id
//     console.log(value+" "+empId);

// db.query(q,[...value,empId],(err,rows)=>{
//     if(!err)
//     return res.status(201).send({status:true,message:"data updated successfully" ,data:rows})
//     return res.status(500).json(err)
//     // .send({status:false,message:"unable to update the employee"})
// })
// })


app.put("/employee/:id",(req,res)=>{
    const q="UPDATE employee Set `name`=?,`empcode`=?,`salary`=? WHERE  `id`=?"
    const value=[
        req.body.name,
        req.body.empcode,
        req.body.salary
    ]
    const empId=req.params.id
    db.query(q,[...value,empId],(err,rows)=>{
        if(!err)
        return res.status(201).send({status:true ,message:"data Updated successfully" , data:rows})
        return res.status(500).json(err)
    })
})

const port=process.env.PORT ||3000

app.listen( port ,function(){
    console.log(`server is connectd on port http://localhost:${port}`)
})



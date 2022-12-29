const bookModel=require('../models/bookModel')
const authorModel=require('../models/authorModel')
const userModel=require('../models/userModel')
const adminModel=require('../models/adminModel')
const validator=require('../Validator/validator');
const mongoose=require('mongoose');


let map=new Map([["book",bookModel],["author",authorModel],["user",userModel],["admin",adminModel]])


//***************************** GetAllData ****************************************** */

const getData=async(req,res)=>{
try{

    //************** validations ******** */

    if(!validator.isValid(req.query.model))
    return res.status(400).send({status:false,message:"please enter valid model"})

    if(!validator.isValidModel(req.query.model))
    return res.status(400).send({status:false,message:"please enter model present in db"})

    //*****End of the Validation ****/

    let userData=await connectdb(req.query.database,req.query.model).find({isDeleted:false})
    
    if(!userData  || userData.length<=0)
    return res.status(400).send({status:true,message:"No Such Data found"})

    mongoose.connection.close(()=>{
        console.log("database connection closed")
    })

     return res.status(200).send({status:true,message:"data found successfully" ,data:userData})


}catch(err){
console.log(err.message)
res.status(500).send({status:false, message:err.message})
}
}


//***************************** Create New Document  ****************************************** */


const createDoc=async(req,res)=>{
    try{

        //*********** Validation **********/

   if(!validator.isValid(req.body.model))
   return res.status(400).send({status:false,message:"please enter valid model"})

   if(!validator.isValidModel(req.body.model))
    return res.status(400).send({status:false,message:"please enter model present in db"})

  if(!validator.isValidRequestBody(req.body.data))
  return res.status(400).send({status:false,message:"request body is empty"})

    //********* Ends */ 

    let userData= await connectdb(req.query.database,req.query.model).create(req.body.data)
   
    if(!userData)
    return res.status(400).send({status:true,message:"opearation unsuccessful"})

    mongoose.connection.close(()=>{
        console.log("database connection closed")
    })

    return res.status(201).send({status:true ,message:"document created Successfully", data:userData})
                    

    }catch(err){
        console.log(err.message)
        res.status(500).send({status:false,message:err.message})
    }
}


//***************************** Delete Any Document  ****************************************** */

const deleteDoc=async(req,res)=>{
    try{
   const docId=req.query.docId

   //*********** Validation **********/

   if(!validator.isValid(req.query.model))
   return res.status(400).send({status:false,message:"please enter valid model"})

   if(!validator.isValidObjectId(docId))
   return res.status(400).send({status:false,message:"Please enter the Valid DocId"})

   if(!validator.isValidModel(req.query.model))
    return res.status(400).send({status:false,message:"please enter model present in db"})

    //********* Ends */

    let userData= await connectdb(req.query.database,req.query.model).findByIdAndUpdate({ _id: docId }, { $set: { isDeleted: true, deletedAt: Date() } }, { new: true })
        
    if(!userData)
        return res.status(400).send({status:false,message:"Document does not found"})

        res.status(200).send({status:true,message:"Data Deleted Successfully"})

    }
    catch(err){
        console.log(err.message)
        res.status(500).send({status:false,message:err.message})
    }
}

//***************************** Update Any Document  ****************************************** */

const UpdateDoc=async(req,res)=>{
    try{
     const docId=req.query.id 
     const model=req.query.model
     const data=req.body

    //*********** Validation **********/

   if(!validator.isValid(model))
   return res.status(400).send({status:false,message:"please enter valid model"})

   if(!validator.isValidObjectId(docId))
   return res.status(400).send({status:false,message:"Please enter the Valid DocId"})

   if(!validator.isValidModel(model))
    return res.status(400).send({status:false,message:"please enter model present in db"})

  if(!validator.isValidRequestBody(data))
  return res.status(400).send({status:false,message:"request body is empty"})

    //********* Ends ********************/ 

     let userData= await connectdb(req.query.database,req.query.model).findByIdAndUpdate({_id:docId,isDeleted:false},data,{new:true})

         if(!userData)
         return res.status(400).send({status:false,message:"unable to find Document with this id"})

         console.log(userData)
         res.status(201).send({status:true,message:"Document Updated Successfully", data:userData })

    }
    catch(err){
        console.log(err.message)
        res.status(500).send({status:false,message:err.message})
    }
}

//*********************** Connect database after api hit function ************************************* */

const connectdb=(db,model)=>{
    mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://127.0.0.1/${db}`,{
    useNewUrlParser:true,
},()=>{
    console.log(`${db} database connected successfully`)})
    let schema=map.get(model)
    return mongoose.model(model,schema)
}

module.exports={ getData, createDoc, deleteDoc , UpdateDoc }
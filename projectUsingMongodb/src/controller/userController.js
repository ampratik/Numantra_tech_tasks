const mongoose=require("mongoose");
const userModel=require("../model/userModel");
const validator=require("../middleware/validator");
const jwt=require("jsonwebtoken");

let nameRegEx = /^[A-z]*$|^[A-z]+\s[A-z]*$/
let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let mobileRegEx = /^(\+\d{1,3}[- ]?)?\d{10}$/

//***********************Create User **************************************************************/

const createUser= async function (req,res){
try{

let data=req.body;
// console.log(data)
const {Name,Age,Gender,Address,Email,Mobile}=req.body
console.log(Name)
if(!validator.isValidRequestBody(data))
    return res.status(400).send({status:false,Message:"Please insert data to create an account"})

    //**********Name Validation************* */
 
    if(!validator.isValid(data.Name))
    return res.status(400).send({status:false,message:"Please Enter your name"})

    if((!Name.match(nameRegEx)))
return res.status(400).send({status:false,Message:"Please Enter Valid Name"})

//************************ Email Validation ***************** */

   if(!validator.isValid(data.Email))
   return res.status(400).send({status:false, Message:"Pleas Enter Valid Email"})

   if(!data.Email.trim().match(emailRegEx)){
    return res.status(400).send({status:false,Message:"Please Enter Valid Email"})
   }

   let email=await userModel.findOne({Email:data.Email})
   if(email) 
   return res.status(400).send({status:false,Message:`${data.Email} this email id already exists try another`})

   //*****************Mobile Number Validation ************************/


//    if(!(Number.toString().match(mobileRegEx))){
//     return res.status(400).send({status:false,Message:"Please Enter Valid Number"})
//    }

//    let number=await userModel.findOne({Number:data.Number})
//    if(number) 
//    return res.status(400).send({status:false,Message:`${data.Number} this Number already exists try another`})

   //**********Age and Address validation********* */

   if(Age>120 || Age<0)
   return res.status(400).send({status:false , Message:"Pleas eneter Valid age"})

   if(!validator.isValid(data.Address.street))
   return res.status(400).send({status:false, Message:"Pleas Enter Valid street"})
   
   
   if(!validator.isValid(data.Address.city))
   return res.status(400).send({status:false, Message:"Pleas Enter Valid city"})

   //**********************ValiDation Ends Here**************8 */

let saveData=await userModel.create(data)
 res.status(201).send({status:true,Messsage:"user created successfully", data:saveData})
}
catch(error){
  res.status(500).send({status:false ,Message:"server error is occurring", data:error.message})
}
}


//******************************************** lOGIN API *************************************************** */

const login=async function(req,res){
    try{
let email=req.body.Email

if(!validator.isValid(email))
   return res.status(400).send({status:false, Message:"Pleas Enter Valid Email"})

   if(!email.trim().match(emailRegEx)){
    return res.status(400).send({status:false,Message:"Please Enter Valid Email"})
   }

   let loginData=await userModel.findOne({Email:email})
   if(!loginData)
   return res.status(400).send({status:false,Message:"No such User Present With This email id"})
   
   const token = jwt.sign({
    userId: loginData._id,
    project: "DemoProject",
    organization: "Numantra Technology"
  }, "AmPratik", { expiresIn: "60m" });

  res.setHeader("my-api-key", token)

res.status(201).send({status:true ,message:"Login Completed Successfully" ,data:token})
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

//**********************************************************8*****Get All User**********************888******************* */

const getAllUser=async function(req,res){
try{
let users= await userModel.find()
res.status(201).send({status:true,message:"List of all the user" ,data:users })
}
catch(error){
res.status(500).send({status:false,message:error.message})
}
}

//**************************** Get User By Name************************ */

const getUserByName=async function(req,res){
    try{
 let name=req.query.Name

 if(!validator.isValid(name))
    return res.status(400).send({status:false,message:"Please Enter your name"})

    if((name.match(nameRegEx)))
return res.status(400).send({status:false,Message:"Please Enter Valid Name"})

  let resData=await userModel.find({Name:name})
  
 res.status(201).send({status:true , Message:"User Found Successfully" , data:resData})
    }
    catch(error){
    res.status(500).send({status:false, Message:error.message})
    }
}



//********************update user  ********************
const updateUser=async(req,res)=>{
try{

    let data=req.query
let saveData=req.body

if(!validator.isValid(data.Email))
return res.status(400).send({status:false, Message:"Pleas Enter Email"})

// if(!data.Email.trim().match(emailRegEx)){
//  return res.status(400).send({status:false,Message:"Please Enter Valid Email"})
// }

let email=await userModel.findOne({Email:data.Email})
if(email) 
return res.status(400).send({status:false,Message:`${data.Email} this email id already exists try another`})

let userData=await userModel.findOneAndUpdate({Email:data.Email},saveData,{new:true})
if(userData)
res.status(201).send({status:true, message:"user Updated successfully", data:userData})

}
catch(error){
console.log({Message:error.message})
res.status(500).send({status:false, message:error.message})
}

}

module.exports={createUser, getAllUser ,getUserByName , login ,updateUser}
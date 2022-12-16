const axios=require('axios');

//********************************************** Get Error Api ************************************************************************ */
 const getError = function (req, res) {
  try {
    let result = req.body.Result;
    if (!result) return res.status(400).send({ status: false, message: "Given array is empty" });

    for (let i of result) {
      i["errorCode"] = 400;
    }
    return res.status(200).send({ status: true, message: "error code added successfully",data: result});
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, message: error.message });
  }
};

//********************************************** Remove Duplicate Api ************************************************************************ */

const removeDuplicate = (req, res) => {
  try {
    if(Object.keys(req.body).length<=0)
    return res.status(400).send({status:true,message:"request body is empty"})
  
    let arr = req.body.data;
    let array = [...new Set(arr)];
    console.log(array);
     return res.status(200).send({ status: true,message: "duplicate element removed succesfully",data: array});
  }
   catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, message: error.message });
  }
};

//********************************************** Get Average Api ************************************************************************ */

const getAverage = function (req, res) {
  try {
    if (Object.keys(req.body).length<=0)
      return res.status(400).send({ status: false, message: "given array is empty" });
      console.log(req.body)
      let array = req.body.array;
    let sum = 0;
    for (let i of array) {
      sum = sum + i.marks;
    }
    let average = sum / array.length;
    return res.send({status: true, message: `Average value of all marks is ${average}`});

  } 
  catch (error) {
    console.log(error.message);
    res.status(200).send({ status: false, message: error.message });
  }
};


//********************************************** Get Key Api ************************************************************************ */

const getKey = function (req, res) {
  try {
    let obj = req.body;
 
    
    if(Object.keys(obj).length<=0){
      return res.status(400).send({ status: false, message: "obj is not present" });
    }
     res.status(200).send({ status: true, message: "keys found successfully", data: keys });
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, message: error.message });
  }
};

//********************************************** Get Gretest Number Api ************************************************************************ */
const gretestNum = function (req, res) {
  try {
  
    if(Object.keys(req.body).length<2)
    return res.status(400).send({status:false,message:"request body is empty"})

   let result=MaxVersionValue(req.body.a,req.body.b)

   res.status(200).send({status:true,message:`the gretest value is ${result}`})
   
  }
   catch (error) {
    console.log(error.message);
    res.status(500).send({ status: false, message: error.message });
  }
};

//********* Function Used in Get Greatest Value ***************************/

function MaxVersionValue(a,b){
  let num1=a.replace(/\./g, '');
  let num2=b.replace(/\./g, '');

     if(num1.length>num2.length){
    diff=num1.length-num2.length
    num2=num2*(10**diff) 

  }else if(num1.length<num2.length){
    diff=num2.length-num1.length
    num1=num1*(10**diff)
  }
  
   let maxValue=Math.max(num1,num2)
   if(maxValue==num1) return a
   return b;
}


//********************************************** Get Data Using Axios Api ************************************************************************ */

const getDataUsingAxios= async function(req,res){
    try{
        
     let result=await axios.get('http://jsonplaceholder.typicode.com/posts')
     let final=[]
     for(let i of result.data){
        if(i.userId==3)
        final.push(i)
     }
     res.status(200).send({status:true,message:"result found successfully", data:final})
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ status: false, message: error.message });
      }

}



module.exports = { removeDuplicate, getAverage, getKey, gretestNum, getError ,getDataUsingAxios };

const { json } = require("express");
const express = require("express");
const async = require("async");
const mysql = require("mysql");
const app = express();

app.use(express.json());

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "taskdb",
});

db.connect((error) => {
  if (!error) console.log("mysql database is connected successfully");
  else
    console.log("unable to connect to mysql database" + JSON.stringify(error));
});

app.get("/test", (req, res) => {
  return res
    .status(200)
    .send({ status: true, message: "server is connecetd successfully" });
});

//********************************************************************************8 */

app.get("/getEmpCode", (req, res) => {
  
   try {
    
    // let a=Date.now()
  //   console.log("time before the query"+" "+ Date.now())
    let code,
      db2 = [];

    const q = "SELECT empcode FROM empcode";
    const q1 = "SELECT * FROM empdata WHERE empcode=?";

    db.query(q, (error, rows) => {
      if (!error) {
        code = rows;
        let codex = code.map((obj) => obj.empcode);
        console.log(codex);

        // console.log("time after the query"+" "+ Date.now())
        console.time("getapi") 
        for (let i = 0; i < codex.length; i++) {
          db.query(q1, codex[i], (error, edata) => {
            if (!error) {
              db2.push(edata);
              //console.log(db2);
        
              if (i == codex.length - 1) {
                // console.log(db2);
                console.timeEnd("getapi")
                res.status(200).send({
                  status: true,
                  Message: "data Found Successfully",
                  data: db2,
                });
              }
            } else {
              res.status(500).send({ status: false, Message: error.message });
            }
          });
        }
        console.timeEnd("getapi")
      } else {
        res
          .status(500)
          .send({ status: false, message: "unable to fetch the data " });
      }
      // let b=Date.now()-a
      // console.log("The time took by api is"+" "+ b)
      console.log(db2);
    });
  } catch (error) {
    res.send(error.message);
  }

});

//***************************************************888 *// Failed 

app.get("/getEmpDataUsingPromise", async (req, res) => {
  try {
    let code, codex;
    const q = "SELECT empcode FROM empcode";
    const q1 = "SELECT * FROM empdata WHERE empcode=?";
    db.query(q, (error, rows) => {
      if (!error) {
        code = rows;
        codex = code.map((obj) => obj.empcode);
        console.log(codex);
        return codex;
      }
    });

    const result = codex.map((id) => {
      db.query(q1, id, (error, rows) => {
        if (error)
          res.status(500).send({ status: false, message: error.message });
        Promise.allSettled(rows).then((data) => {
          console.log(data);
        });
      });
    });

let res1=async function(){
  await db.query(q1,codex,(error,rows)=>{
    if(!error){
      console.log(rows)
       res.status(200).send({status:true , message:"data found successfully", data:rows})
    }else{
      console.log(error.message);
     }
  })

}
 Promise.allSettled(result)
 .then((resdata)=>{
  res.send(resdata)
 }).catch((error)=>{
  console.log(error)
 })
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, message: "server error" });
  }
});

//*************************************************************************************** */ Failed

app.get("/getAllData", async (req, res) => {
  try {
    let code,
      array = [],
      codex = [];

    const q = "SELECT empcode FROM empcode";
    const q1 = "SELECT * FROM empdata WHERE empcode=?";

    db.query(q, (error, rows) => {
      if (!error) {
        code = rows;
        dd = code.map((obj) => obj.empcode);
        codex = [...dd];
        console.log(codex);

        Promise.allSettled(
          codex.map((ele) => {
            // console.log(ele)
            db.query(
              `SELECT * FROM empdata WHERE empcode=${ele}`,
              (err, rows) => {
                if (!err) {
                  // console.log(rows);
                  array.push(rows);
                  // return array;
                  if (array.length == codex.length) {
                    res.status(200).send({
                      status: true,
                      message: "data found successfully",
                      data: array,
                    });
                  }
                }
              }
            );
          })
        ).then((array) => {
          array.forEach((res) => {
            console.log(res);
          });
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});


//****************************************************************************8 */ Successful



app.get("/getDataUsingPromise",(req,res)=>{
  
try{
  let arrayOfPromises=[]
  
db.query(`SELECT empcode FROM empcode`,(err,rows)=>{
  if(err) 
  return res.status(500).send({status:false,message:"unable to fetch the empcode" ,data:err.message})
  else{
   
    if(rows.length<1)
    return res.status(401).send({status:false,message:"No empcode exists in database"})
    console.time("query")
    for(let i of rows){
      arrayOfPromises.push(getData(i.empcode)) ////rows[i].empcode
    }

//  console.log(arrayOfPromises);
  Promise.allSettled([...arrayOfPromises])
  .then((arrayOfPromises)=>{
    // console.log(arrayOfPromises)
    res.status(200).send({status:true , message:"All Promises resolved Successfully" , data:arrayOfPromises})
  }).catch((err)=>{
    console.log(err)
  })
  console.timeEnd("query")  
  // console.log("this is the time before promises" +" "+ new Date().getMilliseconds())

  }
})
console.timeEnd("query")  
}

catch(error){
console.log(error)
res.status(500).send({status:false, Message:error.message})  
}
// let b=Date.now()-a
// console.log("time taken by api is "+" "+b ,"ms")

});

 //********* getData Function Used in getDataUsingPromises api  ******************************8*/

function getData(code){
  return new Promise((resolve,reject)=>{
    db.query(`SELECT * FROM empdata where empcode="${code}"`,(err,data)=>{
      if(err) reject("unable to fetch data")
      else{
        resolve(data)
        // console.log(data)
      }
    })
  })
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});

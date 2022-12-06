const { createPrivateKey } = require("crypto");

const obj=[
    {
      name:"rahul",
      age:26,
      address:"sion"
    },
    {
      name:"prateek",
      age:22,
      address:"sion"
    },
    {
      name:"pata nahi",
      age:20,
      address:"univrese"
    }
  ];

  // filter the query 

  const below22=obj.filter((val)=>{        //thats how you can apply query on object.
    return console.log(val.age>20); 
  })
  
  const add=obj.filter(val=>
  val.name=="prateek")
  console.log(add)

  const add2=obj.filter(val=>val.address=="sion")
  console.log(add2)

  

//foreach query
let arr3=[]
obj.forEach(ele=>arr3.push(ele.name))
console.log(arr3);

let arr4=[]
obj.forEach(ele=>arr4.push(ele.name,ele.age))
console.log(arr4);

//json.parse()

let object='{"Name":"Pratik", "lasName":"Lokhande"}'  //JSON.parse() will convert string into object
console.log(typeof(object))
let d=JSON.parse(object)

console.log(typeof d)

 let d1=JSON.stringify(d)                    //JSON.stringify() will convert object into the string
 console.log(typeof d1)

//nested json
// {
//     "employees"[
//       {"firstName":"pratik", "lastName":"Lokhande"},
//       {"firstName":"abhi", "lastName":"jadhv"},
//       {"firstName":"rahul", "lastName":"kanojiya"}
//     ]
//     } 


//*********************************************************** */
//foreach method
let sum=0
let array=[11,33,55,677,54,23,46,7987,56,24,77987,43,1,576,879,345447]
let dd=array.forEach(funs)
function funs(item){
   sum+=item
}
console.log(sum)

// another example 

let cc=array.forEach(fn)

function fn(item,index,arr){
  arr[index]=item*10
}
console.log(array)
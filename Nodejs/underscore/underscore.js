const _=require("underscore");

//************************************************************************* */

// let names=['Jack','Jones','James','Jerry','Jessica','Jorden','Jonathan']
// _.each(names,(name,key)=>{
//     console.log(`My name is ${name}`)
// })

//************************************************************************* */

let nums=[11,22,33,44,55,66,677,88,99]

// let v=nums.map(num=>{
//     return num*2
// })


// let v=_.map(nums,(num)=>{
//     return num*2
// })

//   console.log(v)

  //************************************************************************* */

  let v=_.filter(nums,(num)=>{
    return num%2==0
  })
  // console.log(v)

//************************************************************************* */
 let v1=_.find(nums,(num)=>{
  return num%3==0
 })
//  console.log(v1)

 //************************************************************************* */


let obj=[{name:'shubham',age:24,salary:15000,married:"no"},{name:'pratik',age:"21",salary:'15000',married:'no'} ]
// console.log(obj)
let v2= _.where(obj,{name:'pratik'})
// console.log(v2)

//************************************************************************* */

console.log(_.pluck(obj,'name')) 
console.log(_.pluck(obj,'age'))
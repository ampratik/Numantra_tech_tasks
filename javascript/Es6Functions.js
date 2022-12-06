//**************************************************************8 */
// var has global and local(functinal scope).its does not have any block scope.
// if(1==1){
//     var message="hey there whatsapp"   //here we can hget the output in the console 
// } 
// console.log(message)

// if(1==1){
//     let message="hey there whatsapp"     // here we cannot gonna get out put just because its declared in let.
// }
// console.log(message)


// variable declared with const connot be redeclared or cannot changes its value.

//**************************************************************8 */

let demo=(a,b)=> a*b;   // arrrow functino will reduce the space we can write function like this.Arrow Functions Return Value by Default:
 let demo1=x=>x*2        //if there is only one argument then no need of paranthesis is there 

 
//**************************************************************8 */
const num1 = [1, 2, 3,11,22,33];              //spread operator will copy all the data from the array .
const num2 = [4, 5, 6];
const number = [...num1, ...num2];
console.log(number)

const [one,two, three,...four]=num1      //when we use three dots before four that is known as rest opearator method and this all phenonmenon is known as otrder destructuring.
console.log(four)


 
//**************************************************************8 */
let array=[11,22,34,556,78,89,54,112]
//three ways of  for loops

for(let i=0;i<array.length;i++){
    console.log(array[i])

}for(let i of array){   
    console.log(i)
}
for(let i in array){    //this will return index value
    console.log(i)
}

//**************************************************************8 */

let map=new Map()       // map will return value in key value pair
for(let i of array){
    if(map.has(i)){
        map.set(i,map.get(i)+1)
    }
    else{
        map.set(i,1)
    }
}

//**************************************************************8 */
function sum(a,b){
    return new Promise(function (resolve,reject){
        sum=a+b
if(sum){
    resolve(sum)
}else{
    reject("not able to add the things")
}
    })
}

function sub(a,b){
    return new Promise(function (resolve,reject){
        minus=a-b
if(sum){
    resolve(minus)
}else{
    reject("not able to minus the things")
}
    })
}

let result=sum(12,40)
.then((add)=>{
    return sub(add,12)
})
.catch((error)=>{
    console.log("something got error")
})

//******************************************************************************************* */

//Date types in javascript 
//there are total 7 js datatypes are there which are 
//undefined ,null,string ,Number,object,boolean,symbol


//******************************************************************************************* */

 let names=["pratik","abhi","pihu","vaishu","rahul"]
 let index=names.values()     //array.value will return all the values prestn in array .
 for(i of index){
    console.log(i)
 }

 

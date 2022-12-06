//for loops
//simple for loop 

let array=[11,22,33,44,55,66,78,989,908,456]

for(let i=0;i<array.length;i++){  // this is the simple for loop 
    console.log(array[i])
}
console.log("*****************************8")
//for of

for(let i of array){  // for of wiill return actual element as i.
    console.log(i)
}
console.log("*****************************8")
// for in

for(let i in array){   // this will return index of element in array
    console.log(i)     // it will gonna return actual values
}
//************************************************************************************************************************* */

//while loop

let n=0;arr=[]   //while create a loop until condition not gonna satisfied
while(n<5){
    arr.push(n*5)
    n++
}
console.log(arr)
//************************************************************888 */
//do while loop
let i=5                   // do while loop is setting condition after the first iteration.
do{                       //we gives condition in while after first iteration.
console.log(i**2)
i++

}while(i>10);
    

//**********************************************************************************888 */

//Break statement

let arr2=["a","b","c","d"]      //break statement will break the loop for specific condition.
for(let i of arr2){
    if(i=="c") break;
   // console.log(i)
}


//contunue statement 

for( let i of arr2){           // continue statement will skip iteration for specific condition.
    if(i=="a") continue;
    console.log(i)
}
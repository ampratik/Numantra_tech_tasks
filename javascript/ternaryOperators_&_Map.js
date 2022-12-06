//Ternary operator
//same as if else loop but shorten the syntax

// syntax= condition ? what if condition satisfys : else 

let arr=[11,22,33,55,77,54,1245,42345,6,1424,6,145,36743,6768,432,5768,6,5754135,4657]
arr2=[]
for(let i of arr){
    (i>1000) ? console.log(i):arr2.push(i)
}
console.log(arr2)


function getFee(isMember){
  return  (isMember ? "100rs" :"300rs")  //turnary operator is the shorten version of if else loop .
}
console.log(getFee(true))
console.log(getFee(false))


//**************************************************************************************8 */

//Map in javascript 

//map is one of the object which holds data in key value pair

let map =new Map([["banana",24],["apple",30],["mango",50],["watermelon",300]])
console.log(map)

map.set("coconut",80)   // to set the element in map we use map.set() method

console.log(map.get("mango"))   // to get the value of any key in map we have to use map.get() method

console.log(map.size)    //map.size will return the size of map (no of key value pairs)

console.log(map.keys())

console.log(map.values())

console.log(map.entries())

//how to set map on array

let map1=new Map()
for(let i of arr){
  if(map1.has(i)){
    map.set(i,map1.get(i)+1)
  }else{
    map1.set(i,1)
  }
}console.log(map1) 


// USE strict mode 
// "use strict";                //usinn strict mode will not allow the undefied variable to be declared by itself.
a=20
console.log(a)


// *********************************************************
var str="HELLO WORLD"; //  before es5
str.charAt(1)

var str = "HELLO WORLD";   //after es5  // we can access element of string directly 
str[0];

// *********************************************************

let str1="                     Hello world"
console.log(str1)
console.log(str1.trim())      //trim will remove the white spaces and introduced oin es5.

// *********************************************************

let arr=[1,2,3,5,67,8,9]
console.log(Array.isArray(arr)) //Array.isSArray() will check whether it is array or not .syntax is :- Array.isArray(arrName)

// *********************************************************
let sum=0
function fns(item){      //The forEach() method calls a function once for each array element.
   sum+=item
}
arr.forEach(fns)
console.log(sum)

// *********************************************************
let sum1=arr.map(fns1)   // map() will perform same  action on each element of array.
 function fns1(item){
    return item*5
 }
console.log(sum1)

// *********************************************************

let sum2=arr.filter(fns2)  // filter() will remove all the elements who doesnt satisfied the condition
function fns2(item){
    return item>5
}
console.log(sum2)

// *********************************************************
 
var numbers = [45, 4, 9, 16, 25];
var check = numbers.every(myFunction);   // every() will check wheather condition for all element are satisfying or not and return in boolean form.

function myFunction(value) {
  return value > 18;
}
console.log(check)

// *********************************************************
var numbers = [45, 4, 9, 16, 25];
var check = numbers.some(myFunction);   // every() will check wheather condition for someelement are satisfying or not and return in boolean form.

function myFunction(value) {
  return value > 18;
}
console.log(check)

// *********************************************************

console.log(numbers.indexOf(9))   // indexof will check for index of element

// *********************************************************

let object='{"Name":"Pratik", "lasName":"Lokhande"}'  //JSON.parse() will convert string into object
console.log(typeof(object))
let d=JSON.parse(object)

console.log(typeof d)

 let d1=JSON.stringify(d)                    //JSON.stringify() will convert object into the string
 console.log(typeof d1)

// *********************************************************
let date= new Date()        //to get exact date of right now 
console.log(date)

console.log(Date.now())     // to get the miliseconds form 1970 (from the start)

// *********************************************************

let obj={"name":"Pratik","surName":"Lokhande",     // this is the getter ans setter method we use in object to avoid writting function everuy time.
get person(){
    return this.name +" "+ this.surName
}
}
console.log(obj.person)


// *********************************************************

const person = {              //call() will alllow you to borrow use function from another object
    firstName:"pratik",      //The member object borrows the fullname method from the person object:
    lastName: "lokhande",
    fullName: function (hometown,state) {
      console.log(this.firstName + " " + this.lastName+" Lives in " +hometown,state)
    }
  }
  
  const member = {
    firstName:"pihu",
    lastName: "jadhav",
  }
  
  let fullName = person.fullName.call(member,"pune","maharashtra");
// the difference between call and apply is apply takes argument in array.and call will take directly with separated my comma.
  let fullName1=person.fullName.apply(member,["Pune","Maharashtrra"])

  //Bind Method

  let getMyFullName=person.fullName.bind(member,"pune","Maharashtra1")
  console.log(getMyFullName)
  //using bind we are creating a copy of function ewhich we gonna invoke laterr. in call we are invoking function directly .

  


  

  
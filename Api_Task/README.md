   GUIDELINES

Create API having below Points
  1) functionto function parameters passing
  2)example of Promise /async await  Using Q library
  3) Error handling (logs)Try Catch




  1) getError API 

Logical program example - add one more property as ErrCode in below json array

Input:-
{
"Result": [
{
"Reason": "CARD LOST",
"ErrType": "",
"ErrMesg": ""
},
{
"Reason": "CARD NOT ACTIVATED",
"ErrType": "",
"ErrMesg": ""
}]}


Output:-
{
"Result": [
{
"Reason": "CARD LOST",
"ErrType": "",
"ErrMesg": "",
"ErrCode": 400
},
{
"Reason": "CARD NOT ACTIVATED",
"ErrType": "",
"ErrMesg": "",
"ErrCode": "400"
}]}


2) API /removeDuplicate 

Remove duplicates records from this array –

Input {

 "data": [12,21,23,67,90,67,56,21,12,44,88,34]
}

Output {

 "data": [12,21,23,67,90,67,56,44,88,34]
}


3)API /getAverage 

Input --- [{ "name":"A", "marks":10},{ "name":"B", "marks":12},{ "name":"C", "marks":15},{
"name":"D", "marks":17},{ "name":"E", "marks":20}]

Calculate total average marks
14.8

4) API with Async Await /getData

Call Another API (http://jsonplaceholder.typicode.com/posts)
and filter out userId having "3" in response



5) API /getKeys 

{
"Name":"JHON",
"CITY":"MUMBAI",
"COLLEGE":"VJTI"
}

EXPECTED
a)
["Name","CITY","COLLEGE"]


6)API /getHighestValue 

let a = "1.2.3";
let b = "1.3.3";
find the greater number


7) POSTMAN collection ==5
Also create postman collection of above api's 
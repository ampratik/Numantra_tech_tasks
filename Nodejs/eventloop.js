const process = require("process");



console.log("1");

fs.readFile("abc.txt", "utf8", (err, data) => {

  console.log(data);

});

setImmediate(() => console.log("Immediate"));

setTimeout(() => console.log("Timer"), 500);

Promise.resolve("Promise").then((res) => console.log(res));

process.nextTick(() => {

  console.log("Executed in the next iteration");

});

console.log("2");
// Memory allocation
// Hoisting 
// Execution
// Code parsing
// Scope
// Type of variables
// Type of functions

/**
 * JS term
 * 1. Execution Context
 * 2. Creation Phase - Time when engine is scanning or parsing the JS Code
 * 3. Execution phase - Time when engine is actually running the code
 * 4. Call stack - Area of execution (thread of execution)
 */

var a = 10;
let c = 20;
const d = {};

function getGreetings(uName) {
    console.log(`Welcome ${uName}`) ;
}

for (let i=0; i<10;i++) {
    console.log("I",i)
}

console.log("Code is running");

let uName = "Sagar";

getGreetings(uName)
console.log("Your name is " + uName)

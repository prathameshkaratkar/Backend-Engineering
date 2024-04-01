const checkDataType = (input) =>{
    //check if the value is boolean
    if(input ===  true || input === false) {
        return 'boolean'
    }

    //check if the input is object
    if(typeof input === "object") {
        return 'object'
    }

    //check if the input is null
    if(input === 'null') {
        return 'Please enter the valid input'
    }

    //check if the input is undefined
    if(input === undefined) {
        return 'Please enter the valid input'
    }

    //check if the input is array
    if(Array.isArray(input)){
        return 'Array'
    }

    //check is the input is string
    if(typeof input === 'string') {
        return 'string'
    } else {
        return 'Number'
    }
}

console.log(checkDataType(5)); // Output: "number"
console.log(checkDataType("Hello")); // Output: "string"
console.log(checkDataType(true)); // Output: "boolean"
console.log(checkDataType({})); // Output: "object"
console.log(checkDataType([])); // Output: "array"
console.log(checkDataType(null)); // Output: "null"
console.log(checkDataType(undefined)); // Output: "undefined"
console.log(checkDataType(!'ankit'))
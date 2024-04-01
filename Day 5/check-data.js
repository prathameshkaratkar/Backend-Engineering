const checkDataType = (input) => {};

console.log(checkDataType(10)); // number
console.log(checkDataType("10")); // string
console.log(checkDataType(true)); // string
console.log(checkDataType(!!!!"ankit")); // boolean
console.log(checkDataType(!"ankit")); // boolean
console.log(checkDataType(!"ankit")); // string
console.log(checkDataType(Number("ankit"))); // Number
console.log(checkDataType()); // 'Please enter a valid input'
console.log(checkDataType(undefined)); // 'Please enter a valid input'
console.log(checkDataType(null)); // 'Please enter a valid input'
console.log(checkDataType([1, 2, 34])); // array
console.log(checkDataType({ name: "Ankit" })); // object
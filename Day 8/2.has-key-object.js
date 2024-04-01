const profile = {
    name : 'prathamesh',
    city : 'pune',

}



// Check if state key exists in profile
console.log("1. name: ", profile.hasOwnProperty("name")); // True
console.log("1. State: ", profile.hasOwnProperty("state")); // False
console.log("2. State: ", "state" in profile); // False



console.log('name',profile.hasOwnProperty('name'))
console.log('state:',profile.hasOwnProperty('state'))
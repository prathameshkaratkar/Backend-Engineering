const uName = "Rahul";
const uCity = "Pune";
const isActive = true;
const uPincode = 411057;
const uCountry = "Bharat";
const uResults = null;
let uAge;
let hobbies = ["teaching", "music", "cooking"];
const profile = {
  name: "Harshada",
  city: "Pune",
};

console.log("uName: ", uName, typeof uName);
console.log("isActive: ", isActive, typeof isActive);
console.log("uPincode: ", uPincode, typeof uPincode);
console.log("hobbies: ", hobbies, typeof hobbies);
console.log("profile: ", profile, typeof profile);

/**
 * Type of
 * - string
 * - boolean
 * - number
 * - object
 * - undefined
 * - function
 */

typeof uAge === "";



const uName = "Rahul";
const uCity = "Pune";
const isActive = true;
const uPincode = 411057;
const uCountry = "Bharat";
const uResults = null;
let uAge;
let hobbies = ["teaching", "music", "cooking"];
const profile = {
  name: "Harshada",
  city: "Pune",
};

console.log("uName: ", uName, uName.constructor.name);
console.log("hobbies: ", hobbies, hobbies.constructor.name);
console.log("profile: ", profile, profile.constructor.name);


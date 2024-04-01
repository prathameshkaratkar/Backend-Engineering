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

function Car() {}

const car = new Car();
console.log("Car: ", car.constructor.name);




const checkList = [
  "music",
  1,
  true,
  10,
  "ankit",
  { name: "Rahul" },
  null,
  undefined,
];

const arr = new Array(10).fill("Yes");

console.log(
  "Checklist: ",
  checkList,
  checkList[0],
  checkList[1],
  checkList[4],
  checkList[7],
  checkList[70],
  checkList[7000]
);
//console.log("checkList Elem: ", arr, arr[0]);

// ! JS automatically fills undefined to all rest values when we're trying to update an index which doesn't exists
checkList[100] = "Dhiraj";
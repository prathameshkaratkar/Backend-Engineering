const arr = [12, 3, 4, 5, 56, 7, 3456, 3456, 3456];

// For loop
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

console.log("Statrting ForOf");
// For of
for (let item of arr) {
  console.log(item);
}


// ! forEach loop
const arar = [1, 2, 3, 4, 5, 6];

const result = arar.forEach((value, index, array) => {
  console.log({ value, index, array });
  return value * 2;
});

console.log("Result", result);
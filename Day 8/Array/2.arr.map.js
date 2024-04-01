// Map
const arr = [1, 2, 3, 4, 5, 6];

const result = arr.map((value, index, array) => {
  console.log({ value, index, array });
  return value * 100;
});

const result2 = arr.map((value) => value * 100);

console.log("arr: ", arr);
console.log("Result: ", result, result2);
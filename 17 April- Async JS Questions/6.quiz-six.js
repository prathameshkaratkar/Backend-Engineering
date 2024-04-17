console.log("1. Start");

const zeroTO = () => {
  console.log("2. I am SetTimeOut ");
};
setTimeout(zeroTO, 0);

let a = 10;
console.log("3. A: ", a);

const p = () =>
  new Promise((reply, reject) => {
    const pZeroTO = () => {
      reply("Done");
    };
    setTimeout(pZeroTO, 0);
  });

p()
  .then((data) => console.log("4. Data: ", data))
  .catch((err) => console.log("4. Err: ", err));
console.log("5. Done");
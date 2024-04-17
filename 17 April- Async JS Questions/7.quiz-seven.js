console.log("1. Start");

function one() {
  function two() {
    function three() {
      setTimeout(() => {
        console.log("2. SetTimeOut");
      }, 3000);
    }
    three();
  }
  two();
}

one();

console.log("3. End");
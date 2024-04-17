var a =10;
let c = 20;
const d = {};

function getGreetings(uName) {
  console.log("inside getGreetings");
  function getGreetings2(){
    console.log("inside getGreetings2");
    function getGreetings3(){
        console.log("inside getGreetings3");
    }
    getGreetings3();
  }
  getGreetings2();
}

for (let i = 0; i <10;i++) {
    console.log("I",i)
}

console.log('code is running')

let uName = "Sagar";
getGreetings(uName);
console.log("Your name is " + uName)
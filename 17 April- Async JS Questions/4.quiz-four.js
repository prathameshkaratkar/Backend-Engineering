console.log("1.start")

setTimeout(() =>{
    console.log("2. I am settimeout")
},0)

let a  = 10;

console.log("3. A:", a);

const p = () => new Promise((reply,reject) => reply("I am settimeout"))

p()
   .then((data) => console.log("4. Data:", data))
   .catch((err) => console.log("4. Error:", err))

console.log("5.Done")

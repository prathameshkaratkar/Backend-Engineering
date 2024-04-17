console.log("1. Start")

setTimeout(() =>{
    console.log("2. I am SetTimeout")
},0)

let a = 10;
console.log("3. A:", a)

const p = () => new Promise((reply, reject) => {
    setTimeout(() => {
        reply("Done")
    },3000)
})

p()
    .then((data) => console.log("4. Data:", data))
    .catch((err) => console.log("4. Error:", err))

console.log("5. Done")

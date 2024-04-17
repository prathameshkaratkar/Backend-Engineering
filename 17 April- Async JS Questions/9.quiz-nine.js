const p = () => {
    return new Promise((resolve,reject) => {
        resolve("done");
        reject("error");
        resolve("done again")
    })
}

p().then((data) => console.log(data)).catch((err) => console.log(err))
console.log("Start")

const p = ()  =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("First")
        },3000)
    })
}

const q = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Second")
        },3000)
    })
}

const r = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("Third")
        },3000)
    })
}

// Using Async Await

const callAPI = async() =>{
    try {
        const pResult = await p();
        console.log("pResult: ", pResult)

        const qResult = await q();
        console.log("qResult:",qResult)

        const rResult = await r();
        console.log("rResult:",rResult)
    } catch(err) {
        console.log('Erro',err)
    }
}

callAPI()
console.log('Start')

const p = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('First')
        },3000)
    })
}

const q = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Second')
        },6000)
    })
}

const r = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Third')
        },10000)
    })
}

// Case 1 - via .then & .catch

Promise.all([p(),q(),r()])
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))


// Case 2 - via .then

Promise.all([p(),q(),r()])
.then(resolve => {
    console.log(resolve)
})


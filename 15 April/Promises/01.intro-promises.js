//! Async function declaration creates a binding of new async function to the given name. the await keyword is permitted within the function body, enabling asynchronous, promises based behavior to be written in cleaner style And avoiding the need to explicitly configure promise chains


//! The purpose of async/await is to simplify the syntax necessary for consuming promises based on API call. The behavior of async/await is similar to combining generators and promises



//! Async function always returns a promise if the return value of the async function is not explicitly a promise, it will be implicitly wrapped in a promise.

async function foo () {
    return 1;
}

// it is similar

function foo() {
    Promise.resolve(1);
}


//! Even though the return value of the async function behaves as if it's wrapped in a promise. resolve, they are not equivalent

const p = new Promise((resolve,reject) =>{
    resolve(1)
})

async function asyncReturn () {
    return p
}

function basicReturn () {
    return Promise.resolve(p)
}

console.log(p === basicReturn())  // true
console.log(p === asyncReturn())  // false
console.log("start")

const p = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve('First')
        },3000)
    })
}

const q = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            resolve('Second')
        },3000)
    })
}

const r = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            resolve('Third')
        },3000)
    })
}

// Case 1 - via .then & .catch
p()
  .then((pData) => {
    console.log("pData: ", pData);
    q()
      .then((qData) => {
        console.log("qData: ", qData);
        r()
          .then((rData) => {
            console.log("rData: ", rData);
          })
          .catch((rErr) => {
            console.log("rErr: ", rErr);
          });
      })
      .catch((pErr) => {
        console.log("pErr: ", pErr);
      });
  })
  .catch((err) => {
    console.log("Err: ", err);
  });


// Call().then(success).catch(err)

console.log('End')
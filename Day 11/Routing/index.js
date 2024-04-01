const express = require("express");
const app = express()
const PORT = 7001;

app.get('/',(request,response)=>{
    response.send('Welcome to my first express App')
})

app.get('/greetings',(request,response)=>{
    const {profile} = request.query
    const message = `Welcome ${profile || "there"} to greetings route`
    response.send({message})
})

//Running Server
app.listen(PORT,()=>{
    console.log(`the server is running on http://localhost:${PORT}`);
})
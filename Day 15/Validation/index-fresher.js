const express = require('express')
const app = express()
const port = 4000;

// to enable request.body => Middleware

app.use(express.json())

let todos = [];

app.post('/todos',(req,res)=>{
    console.log('Body:',req.body);
    const {title} = req.body;
    if(!title) {
        return res.status(400).send('Please enter title first')
    }
    res.send({message: "Welcome to todos"})
})

app.listen(port, ()=>{
    console.log(`http:localhost:${port}`)
})
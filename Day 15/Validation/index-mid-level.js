const express = require('express')
const app = express()
const port = 5000;

app.use(express.json());

let todos = [];

app.get("/",
    (req,res,next)=>{
        const {user} = req.query
        if(user !== "bharat") {
            return res.status(400).send({message: "You are not allowed to see this page"})
        }

        next()
    },
    (req,res)=>{}
)
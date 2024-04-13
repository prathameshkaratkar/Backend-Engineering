const express = require('express')
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 5002;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,    // limit each IP to 100 requests per windowMs
    message:"Please try after 15 minutes" 
});

// create a middleware
app.use(limiter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`)
})
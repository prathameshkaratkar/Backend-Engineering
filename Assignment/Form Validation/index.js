const express = require('express');
const {body, validationResult} = require('express-validator');

const app = express();

//Middleware to parse the JSON bodies
app.use(express.json());

app.post('/todos',[
    body('title').notEmpty().withMessage('title is required'),
],(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // if validation passes , create the todos
    const todos = {
        title: req.body.title,
        description: req.body.description || '',
    };
    res.status(200).json(todos);
    
})

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
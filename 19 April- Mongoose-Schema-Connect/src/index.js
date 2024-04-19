import express from 'express';

const app = express();

import mongoose from 'mongoose';
import userRouter from './users/users.routes.js';

app.use(express.json());
app.use('/users',userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/myecommerce').then(() => 
    console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection error: " + err))

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`the server started on ${PORT}`);
});
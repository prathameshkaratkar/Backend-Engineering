import express from 'express';
import mongoose from 'mongoose';
import userRouter from './users/users.routes.js';
import {rateLimit} from 'express-rate-limit';



mongoose.connect('mongodb://127.0.0.1:27017/myecommerce').then(() => 
    console.log("Database connected successfully"))
    .catch((err) => console.log("Database connection error: " + err))

const app = express();
app.use(express.json());


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes"
})





app.use(limiter);
app.use('/users',userRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`the server started on ${PORT}`);
});
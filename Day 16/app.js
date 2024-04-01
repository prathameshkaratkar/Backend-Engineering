import express from "express";
import signinRouter from "./src/account/signin/signin.routes.js";
const app = express();
const PORT = 6000;

app.use(express.json());
app.use('/signin',signinRouter)

app.listen(PORT,()=>{
    console.log(`the server is running at http://localhost:${PORT}`)
})
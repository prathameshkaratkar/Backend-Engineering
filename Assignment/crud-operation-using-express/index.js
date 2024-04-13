import express from 'express';
import bodyParser from 'body-parser';

import booksRoutes from './routes/books.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/books',booksRoutes)

app.listen(PORT, ()=>{
    console.log(`The server running on port : http://localhost:${PORT}`);
})
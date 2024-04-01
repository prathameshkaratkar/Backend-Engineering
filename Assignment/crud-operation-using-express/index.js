const express = require('express')
const {uuidv4} = require('uuid')
//The create method for express
const app = express();

// For serialization we use 
app.use(express(express.json))

// lets take the variable to store the data
let books = [];


//For create a book
app.post('/books',(req,res)=>{
    const {title, author} = req.body;
    if (!title || !author) {
        return res.status(400).send('Missing title or author')
    }
    const newBook = {id:books.length + 1, title, author}
    books.push(newBook);
    res.status(200).send(newBook)
});

// For getting all books
app.get('/books',(req,res)=>{
    res.json(books)
});

// For getting single particular book
app.get('/books/:id',(req,res) =>{
    const book = books.find(b=>b.id === parseInt(req.params.id));
    if(!book){
        return res.status(404).send('Book not found')
    }
    res.json(book)
});

// Call the server for runningg
app.listen(port,()=>{
    console.log(`the server is running on http://localhost:${port}`)

})
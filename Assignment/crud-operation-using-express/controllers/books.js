import {v4 as uuidv4} from 'uuid';

let books = [];

export const createBook = (req, res) => {

    const book = req.body;

    books.push({...book, id:uuidv4()})

    res.send(`user with the same ${book.title} added to the database`)

}

export const getBooks = (req, res) => {
    res.send(books);
}

export const getBook = (req, res) => {
    const {id} = req.params;

    const foundBook = books.find((book) => book.id === id)
    res.send(foundBook);
}

export const deleteBook = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id)
    res.send(`Book with the id ${id} deleted from the database`);
}

export const updateBook = (req, res) => {
    const {id} = req.params;

    const book = books.find((book) => book.id === id)

    const {title, author} = req.body;

    if(title) {
        book.title = title;
    }
    if(author) {
        book.author = author;
    }

    res.send(`Book with the id ${id} updated`);
}
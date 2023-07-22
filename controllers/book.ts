import express from 'express'
import bookData from "../data/bookData.js";
import Book from "../types/book.js";
const checkId = (id: number,res:express.Response) => {
    return bookData.find(book => book.id === id) ? "" :res.status(404).send("not found Book with id: " + id);
}
const validId = (id: number,res:express.Response) =>isNaN(id)?res.status(401).send("Enter valid id please !"):""
export const getBooks = (req: Book.request, res: Book.response) => {
    let getBookData = bookData
    if (req.query.name) {
        getBookData = bookData.filter(book => book.title === req.query.name)
        if (getBookData.length === 0) {
            return res.status(404).send(`Book with Name : ${req.query.name} not found`)
        }
    }
    if (req.query.publicationYear) {
        getBookData = getBookData.filter(book => book.publicationYear === parseInt(req.query.publicationYear))
        if (getBookData.length === 0) {
            return res.status(404).send(`Book with publicationYear : ${req.query.publicationYear} not found`)
        }
    }
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const filterData = getBookData.slice((page - 1) * pageSize, pageSize * page)
    res.send({ page: page, pageSize: pageSize, total: getBookData.length, books: filterData })
}

export const getBookById = (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id);
    validId(id,res)
    checkId(id,res)
    const filterData = bookData.find(e => e.id === id)
    res.send(filterData)
}

export const postBook = (req: Book.request, res: express.Response) => {
    if (!req.body.title || !req.body.author || !req.body.publicationYear) {
        return res.status(400).send("invalid Requirement title and publicationYear and author must be specified")
        
    }
    const newBook: Book.Data = {
        id: bookData[bookData.length - 1].id + 1,
        author: req.body.author,
        publicationYear: req.body.publicationYear,
        title: req.body.title
    }
    bookData.push(newBook)
    res.status(201).send("Book added successfully")
}

export const updateBookById = (req: Book.request, res: express.Response) => {
    const id = parseInt(req.params.id)
 validId(id,res)
 checkId(id,res)
    if (!req.body.title || !req.body.author || !req.body.publicationYear) {
        return res.status(400).send("invalid Requirement title and publicationYear and author must be specified")
       
    }

    bookData[id - 1] = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear
    }
    res.status(201).send("Book updated successfully")
}

export const deleteBookById = (req: express.Request, res: express.Response) => {
 
    const id = parseInt(req.params.id)
    validId(id,res)
    checkId(id,res)
    bookData.splice(id - 1, 1)
    res.status(201).send("Book with id:" + id + " deleted")
}
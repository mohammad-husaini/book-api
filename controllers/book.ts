import express from 'express'
import bookData from "../data/bookData.js";
import NSBook from "../types/book.js";
const checkId = (id: number,res:express.Response) => {
    return bookData.find(book => book.id === id) ? "" :res.status(404).send("not found Book with id: " + id);
}
const validId = (id: number,res:express.Response) =>isNaN(id)?res.status(401).send("Enter valid id please !"):""
const getBooks = (req: NSBook.request, res: NSBook.response) => {
   
    
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
    const sort = req.query.sort || "id";  
    const sortedBooks = [...getBookData].sort((a, b) => {
        if (sort === "title") {
          return a.title.localeCompare(b.title);
        } else if (sort === "author") {
          return a.author.localeCompare(b.author);
        } else if (sort === "publicationYear") {
          return a.publicationYear - b.publicationYear;
        } else {

          return a.id - b.id;
        }
      });
   
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const filterData = sortedBooks.slice((page - 1) * pageSize, pageSize * page)
    res.send({totalPages:Math.ceil(getBookData.length/(pageSize)), currentPage: page, pageSize: pageSize, total: getBookData.length, books: filterData })
}

 const getBookById = (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id);
    validId(id,res)
    checkId(id,res)
    const filterData = bookData.find(e => e.id === id)
    res.send(filterData)
}

const postBook = (req: NSBook.request, res: express.Response) => {
    if (!req.body.title || !req.body.author || !req.body.publicationYear) {
        return res.status(400).send("invalid Requirement title and publicationYear and author must be specified")
        
    }
    const newBook: NSBook.Data = {
        id: bookData[bookData.length - 1].id + 1,
        author: req.body.author,
        publicationYear: req.body.publicationYear,
        title: req.body.title
    }
    bookData.push(newBook)
    res.status(201).send("Book added successfully")
}

 const updateBookById = (req: NSBook.request, res: express.Response) => {
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

const deleteBookById = (req: express.Request, res: express.Response) => {
 
    const id = parseInt(req.params.id)
    validId(id,res)
    checkId(id,res)
    bookData.splice(id - 1, 1)
    res.status(201).send("Book with id:" + id + " deleted")
}
export default {getBookById,getBooks,deleteBookById,updateBookById,postBook}
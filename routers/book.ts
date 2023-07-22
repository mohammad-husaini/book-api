import express from 'express'
import { deleteBookById, getBookById, getBooks, postBook, updateBookById } from '../controllers/book.js';
const router = express.Router();

router.get('/',getBooks )
router.get('/:id', getBookById );
router.post('/',postBook );
router.put('/:id',updateBookById)
router.delete('/:id',deleteBookById )

export default router;
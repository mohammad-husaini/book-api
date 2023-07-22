import express from 'express';
import bookRoute from './routers/book.js';
import loggerMiddleware from './middelware/loggerMiddleware.js';
const app =express();
const PORT = 3000
app.use(express.json());
app.use('/',loggerMiddleware); 
app.use('/books',bookRoute)
app.use('/',(req,res)=>{res.status(404).send('Cant find this path sorry :( !');})
app.listen(PORT,() => {
    console.log(`listening on PORT : ${PORT}`);
    
})
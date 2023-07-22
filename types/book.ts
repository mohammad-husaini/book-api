import express from 'express';
namespace Book {
export interface Data{
    id: number,
    title: string,
    author: string,
    publicationYear: number
}
export interface  request extends express.Request{
    body: Data,
    query: {page:string,pageSize:string,name:string,publicationYear:string},
    
    }
export interface response extends express.Response{
    send: (body: string | {
        page: number,
        pageSize: number,
        total: number,
        books: Array<Data>
      })  => this
    }
}

export default Book
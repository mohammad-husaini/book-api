import express from 'express';
namespace NSBook {
export interface Data{
    id: number,
    title: string,
    author: string,
    publicationYear: number
}
export interface  request extends express.Request{
    body: Data,
    query: {page:string,pageSize:string,name:string,publicationYear:string,sort:string},
    
    }
export interface response extends express.Response{
    send: (body: string | {
        totalPages:number
        currentPage: number,
        pageSize: number,
        total: number,
        books: Array<Data>
      })  => this
    }
}

export default NSBook
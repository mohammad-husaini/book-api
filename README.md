# Book Management System REST API

This repository contains a Book Management System REST API built using Express.js and TypeScript. The API allows users to perform CRUD operations on books stored in a JSON file and provides additional functionality for querying books by name or publishing year.

## Getting Started

To use this API, follow the steps below:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/mohammad-husaini/book-api.git
```

2. Navigate to the project directory:

```bash
cd book-api
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The server will be running at `http://localhost:3000`.

## Sample Data

The sample data for the books is available in the `bookData.ts` file within the repository. Here is the sample book data:

```typescript
export default [
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publicationYear": 1960
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "publicationYear": 1949
  },
  // More books...
  {
    "id": 41,
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "publicationYear": 2004
  },
  {
    "id": 42,
    "title": "Palestine",
    "author": "Dan Brown",
    "publicationYear": 2003
  }
];
```

## API Endpoints

### Retrieve all books

- **Endpoint:** GET `/api/books`
- **Description:** Fetches all books from the JSON file and returns them as a JSON response.
- **Parameters:**
  - `page` (optional): The page number for pagination (default is 1).
  - `pageSize` (optional): The number of books to be returned per page (default is 5).
- **Example Request:** `/api/books?page=1&pageSize=10`
- **Example Response:**

```json
{
  "totalPages": 9,
  "currentPage": 1,
  "pageSize": 10,
  "total":42,
  "books": [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publicationYear": 1960
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "publicationYear": 1949
    },
    // More books...
  ]
}
```

### Retrieve a specific book

- **Endpoint:** GET `/api/books/:id`
- **Description:** Fetches a specific book by its ID and returns its details as a JSON response.
- **Example Response:**

```json
{
  "id": 1,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "publicationYear": 1960
}
```

### Add a new book

- **Endpoint:** POST `/api/books`
- **Description:** Adds a new book to the JSON file based on the data provided in the request body.
- **Request Body:**

```json
{
  "title": "New Book",
  "author": "New Author",
  "publicationYear": 2022
}
```

### Update a book

- **Endpoint:** PUT `/api/books/:id`
- **Description:** Updates a specific book by its ID using the data provided in the request body.
- **Request Body:**

```json
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "publicationYear": 2021
}
```

### Delete a book

- **Endpoint:** DELETE `/api/books/:id`
- **Description:** Deletes a specific book by its ID from the JSON file.

### Query books by name

- **Endpoint:** GET `/api/books?name=bookname`
- **Description:** Retrieves a list of books that match the provided name from the JSON file.
- **Example Request:** `/api/books?name=Example`

### Query books by publishing year

- **Endpoint:** GET `/api/books?publicationYear=yearvalue`
- **Description:** Retrieves a list of books published in the provided year from the JSON file.
- **Example Request:** `/api/books?publicationYear=2020`
  Sure! Here's a sorting statement that you can add to the `README.md` to demonstrate how to use the sorting functionality of the Book Management System REST API:

### Sorting Books

The API supports sorting the books by different fields. You can use the `sort` query parameter to specify the field by which you want to sort the books. The available fields for sorting are:

- `title`: Sorts the books alphabetically by their titles.
- `author`: Sorts the books alphabetically by the authors' names.
- `publicationYear`: Sorts the books chronologically by their publication years.

To use the sorting functionality, make a request to the `/api/books` endpoint with the `sort` query parameter set to one of the fields mentioned above. For example:

- To retrieve the books sorted by title:

```
GET /api/books?sort=title
```

- To retrieve the books sorted by author:

```
GET /api/books?sort=author
```

- To retrieve the books sorted by publication year:

```
GET /api/books?sort=publicationYear
```

If no `sort` query parameter is provided, the API will default to sorting the books by their IDs.

## Error Handling

The API is designed to handle appropriate status codes and error scenarios. If a request is made to a non-existing endpoint, the API will respond with a 404 Not Found status code. Additionally, specific error messages will be returned for various validation and handling errors, such as trying to retrieve a non-existing book or providing invalid data for book creation and update.


## Conclusion

This Book Management System REST API provides a user-friendly interface for managing books effectively. The API's well-structured code and comprehensive documentation make it easy to integrate into your applications. Feel free to explore the API and leverage its capabilities to handle CRUD operations, search for books, and more.

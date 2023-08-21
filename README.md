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

## Deployed in an Auto-Scaling Group behind an Application Load Balancer.(AWS)
# Book Management System REST API

This repository contains a Book Management System REST API built using Express.js and TypeScript. The API allows users to perform CRUD operations on books stored in a JSON file and provides additional functionality for querying books by name or publishing year.

## Deployment Steps and Screenshots

This section provides step-by-step instructions for deploying the Book Management app to AWS. Each step is accompanied by screenshots to help you visualize the process.

## Step 1: Prepare Your Application

### 1.Add health check to code 
 
![Screenshot from 2023-08-20 10-59-42](https://github.com/mohammad-husaini/book-api/assets/125281502/eeeb4715-5520-46b2-869e-bba8d54a31c6)

### 2.Add process.env.PORT

![Screenshot from 2023-08-20 11-00-08](https://github.com/mohammad-husaini/book-api/assets/125281502/c2552556-4651-4140-b944-f86988a2f674)

### 3.Add build command to pakeage.json 

![Screenshot from 2023-08-20 11-10-19](https://github.com/mohammad-husaini/book-api/assets/125281502/dc9f3fc1-8c0d-4e6a-bda5-a783cbdb6512)

### 4.run the command to build dist file

![Screenshot from 2023-08-20 11-10-05](https://github.com/mohammad-husaini/book-api/assets/125281502/60a0ab1a-062e-4739-9d3e-8a4bf4c97b91)

![Screenshot from 2023-08-20 14-18-21](https://github.com/mohammad-husaini/book-api/assets/125281502/32ab1819-7c9f-485b-ad42-47241d1ba117)

### 5.compress the file using tar czvf app.tar.gz package.json package-lock.json dist/*

![Screenshot from 2023-08-20 11-11-13](https://github.com/mohammad-husaini/book-api/assets/125281502/6448cdfb-396d-401b-aaf6-8318625d1b96)

![Screenshot from 2023-08-20 11-12-29](https://github.com/mohammad-husaini/book-api/assets/125281502/2cbbf58b-acfa-40bf-96c0-28303193037a)


## Step 2: Upload the compress file to GitHub

### 1.Create a new relese 

![Screenshot from 2023-08-20 11-27-11](https://github.com/mohammad-husaini/book-api/assets/125281502/78461986-9869-4d70-b17d-d10aae45de34)

### 2.Create a new Tag (latest)


![Screenshot from 2023-08-20 11-27-43](https://github.com/mohammad-husaini/book-api/assets/125281502/fca60cd9-8bb5-4236-8889-a1d36e116f7c)

### 3.Upload the compress file to the relese 

![Screenshot from 2023-08-20 11-28-36](https://github.com/mohammad-husaini/book-api/assets/125281502/bef7f4b2-fd11-42eb-84e7-9eb3c3f78912)

### 4.publish relese

![Screenshot from 2023-08-20 11-28-56](https://github.com/mohammad-husaini/book-api/assets/125281502/9fbfcd86-8d84-4658-874d-d4af402aa7a2)


## Step 3: Create Auto Scaling Groups

### 1.Select Auto scaling groups

![Screenshot from 2023-08-20 11-34-30](https://github.com/mohammad-husaini/book-api/assets/125281502/35a5cb99-e1af-426c-a4a4-b87f9f219629)

### 2.Create Auto scaling group

![Screenshot from 2023-08-20 11-34-40](https://github.com/mohammad-husaini/book-api/assets/125281502/8bcf84dc-5468-4a97-a796-7abf0359649c)

### 3.Enter a Name 

![Screenshot from 2023-08-20 11-35-42](https://github.com/mohammad-husaini/book-api/assets/125281502/1ff8a4c9-71a1-40c2-abd0-82c97a332ff3)

### 4.Create a Launch template

![Screenshot from 2023-08-20 11-35-57](https://github.com/mohammad-husaini/book-api/assets/125281502/458471ad-82bc-4a02-aed9-0f551bf1a4b8)

### 5.Enter the template name and the version of this template 

![Screenshot from 2023-08-20 11-36-49](https://github.com/mohammad-husaini/book-api/assets/125281502/c9e8c7f3-623d-4bad-a2ce-fe4522fa5e1f)

### 6.Select the OS And the cpu Architecture

![Screenshot from 2023-08-20 11-37-30](https://github.com/mohammad-husaini/book-api/assets/125281502/ecaa8fd5-8e8a-4725-bee3-6956ee91a211)

### 7.Select instance type

![Screenshot from 2023-08-20 11-37-51](https://github.com/mohammad-husaini/book-api/assets/125281502/ed258dec-ddbc-485a-b494-0ce7364d3010)

### 8.Create a key pair 

![Screenshot from 2023-08-20 11-38-09](https://github.com/mohammad-husaini/book-api/assets/125281502/f5c06722-91d2-4725-a368-5f4af21d658c)

![Screenshot from 2023-08-20 11-38-54](https://github.com/mohammad-husaini/book-api/assets/125281502/99ba8cee-5816-488e-9e9d-396628f2c15e)

### 9.Create a security group 

![Screenshot from 2023-08-20 11-44-18](https://github.com/mohammad-husaini/book-api/assets/125281502/de42e171-54ee-4325-8606-98e2fea8204c)

### 10.Add rule for security group

![Screenshot from 2023-08-20 11-44-41](https://github.com/mohammad-husaini/book-api/assets/125281502/c7378247-e5b5-4175-8c91-7db3b6f6bb5f)

### 11.Upload the user data sh code 

![Screenshot from 2023-08-20 11-46-41](https://github.com/mohammad-husaini/book-api/assets/125281502/c2ad5b7d-b7f8-428f-bf68-aad1d4147694)

```bash
#!/bin/sh
set -e

sudo apt update
sudo apt upgrade -y

# install nodejs repo
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install nodejs jq curl -y

# deploy app
repo="mohammad-husaini/book-api"
download_url=$(curl "https://api.github.com/repos/$repo/releases/latest" | jq --raw-output '.assets[0].browser_download_url')
asset_name=$(curl "https://api.github.com/repos/$repo/releases/latest" | jq --raw-output '.assets[0].name')

curl -O "https://raw.githubusercontent.com/$repo/main/infrastructure/app.service"
sudo mv app.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable app.service

sudo -u ubuntu sh -c "mkdir -p /home/ubuntu/app && cd /home/ubuntu/app && curl -LO $download_url && tar xzvf app.tar.gz && npm install --omit=dev"

sudo reboot
```
### 12.Create the launch template 

![Screenshot from 2023-08-20 11-46-57](https://github.com/mohammad-husaini/book-api/assets/125281502/feea2e3e-0471-49ae-84b8-8cb72537f770)

![Screenshot from 2023-08-20 11-47-24](https://github.com/mohammad-husaini/book-api/assets/125281502/f796d391-4a18-4d63-9a37-bfb67f5156f7)

### 13.Back to auto scalling group and select our templet 

![Screenshot from 2023-08-20 11-48-41](https://github.com/mohammad-husaini/book-api/assets/125281502/310ef4a6-d17b-45e5-863c-134055cf8a13)

### 14.Select the Availability Zones and subnets

![Screenshot from 2023-08-20 11-49-06](https://github.com/mohammad-husaini/book-api/assets/125281502/825d0ba2-7e09-4400-b11c-8f38690e8a71)

### 15.show the instance type requirments 

![Screenshot from 2023-08-20 11-49-28](https://github.com/mohammad-husaini/book-api/assets/125281502/b80e5d5b-9741-4e08-83bd-15815f8cdf11)

### 16.Select the load balancing 

![Screenshot from 2023-08-20 11-50-03](https://github.com/mohammad-husaini/book-api/assets/125281502/cf7e4d70-f814-4e95-8c07-ce5e81e18951)

### 17.select load balancer scheme and Availability Zone 

![Screenshot from 2023-08-20 11-50-50](https://github.com/mohammad-husaini/book-api/assets/125281502/bbd8beab-2e7e-4920-aab6-95ff5c8eed53)

### 18.Select Create target group 

![Screenshot from 2023-08-20 11-51-47](https://github.com/mohammad-husaini/book-api/assets/125281502/2c08f178-cd31-4841-ab46-b4a7bce1dfde)

### 19.VPC options

![Screenshot from 2023-08-20 11-51-59](https://github.com/mohammad-husaini/book-api/assets/125281502/a3f17978-dd7c-4e3e-ad4e-8bded7e24063)

### 20.Enable Health checks

![Screenshot from 2023-08-20 11-52-20](https://github.com/mohammad-husaini/book-api/assets/125281502/5f82a4cc-c20f-4906-a8e5-8367583db27f)

### 21.Next

![Screenshot from 2023-08-20 11-52-41](https://github.com/mohammad-husaini/book-api/assets/125281502/8742a521-902f-4cbd-bf8d-82a9ec826fa8)

### 22.Configure group size and scaling policies (BOUNS)

![Screenshot from 2023-08-20 11-53-14](https://github.com/mohammad-husaini/book-api/assets/125281502/1a8c33a3-c1d2-4541-af84-5ec2a4d925d1)
![Screenshot from 2023-08-20 11-54-10](https://github.com/mohammad-husaini/book-api/assets/125281502/c24b25c2-5049-47a0-a6ca-5caa316ab603)\

### 23.Next

![Screenshot from 2023-08-20 11-54-32](https://github.com/mohammad-husaini/book-api/assets/125281502/125fd28d-6e3c-48c8-808c-567f1b5246e2)

### 24.Next

![Screenshot from 2023-08-20 11-54-46](https://github.com/mohammad-husaini/book-api/assets/125281502/d521e76e-52d7-4934-a843-b09057ece211)

### 25.Next 

![Screenshot from 2023-08-20 11-54-54](https://github.com/mohammad-husaini/book-api/assets/125281502/504372b0-a2fe-4278-9250-53c0a06f0743)

### 26.Create Auto Scaling group

![Screenshot from 2023-08-20 11-55-10](https://github.com/mohammad-husaini/book-api/assets/125281502/7bfec9ff-8405-4eed-8259-5275acc52947)

### 27.Edit health check settings and add the path

![Screenshot from 2023-08-20 13-16-49](https://github.com/mohammad-husaini/book-api/assets/125281502/b91c0700-9feb-462e-96fb-b625236ce6ca)

### 28.Done Done the instanse is Healthy

![Screenshot from 2023-08-20 13-24-02](https://github.com/mohammad-husaini/book-api/assets/125281502/7f8a1b1f-9a8d-4fee-b033-1c0967b435cf)


## TNX <3

# Personal Library API

A simple REST API for managing a personal library. It is built with **Node.js, Express and MongoDB**. 

This project demonstrates how to structure a basic API with: 
- Controllers
- Services
- Repositories
- Models
- Routes 
- Middleware

It also includes **authentication and API documentation using Swagger**.
After running the server locally, you can access the docs: [View API Docs](http://localhost:3000/api-docs)

## Setup
1. Clone the repo and install dependencies:
```bash
git clone 
cd personal-library-api
npm install
```
2. create a .env file:
```bash
PORT = 3000
DB_URI = mongodb://127.0.0.1:27017/yourdb
JWT_SECRET = your_jwt_secret
```
3. Run the server:
```bash
npm run dev
```
4. Open the docs in your browser and test:
https://localhost:3000/api-docs

## Tutorial
A step-by-step guide to recreating this project can be found here: [Read the Full Tutorial](https://masteringbackend.com/posts/build-a-personal-library-api-with-node-js-express-and-mongo-db)
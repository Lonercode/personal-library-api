require('dotenv').config()
const express = require('express')
const connectDB = require('./db')
const app = express()
const port = process.env.PORT
const userRoutes = require('./routes/user.routes')
const booksRoutes = require('./routes/books.routes')

app.use(express.json())

connectDB()

app.use('/users', userRoutes)
app.use('/books', booksRoutes)

app.get('/', (req, res) => {
    res.send("This awesome Library API is running!")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
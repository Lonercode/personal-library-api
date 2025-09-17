require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected successfully")
    } catch(err){
        console.log(` A Database connection error occured: ${err.message}`)
    }
}

module.exports = connectDB

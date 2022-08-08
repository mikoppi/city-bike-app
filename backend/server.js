const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./utils/errorMiddleware')
const connectDB = require('./config/database')
const parser = require('./utils/dataParser')

const port = process.env.PORT || 5000

connectDB()


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/journeys', require('./routes/journeyRoutes.js'))

const load = async() => {
    await parser.parseFile('./data/journeysTestData.csv')
    //await parser.parseFile('./data/2021-05.csv')
}

load()

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
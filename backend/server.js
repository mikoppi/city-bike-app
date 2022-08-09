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


// if database is empty use this function to import all datasets
const importFiles =() => {
    const filePaths = ['./data/2021-05.csv', './data/2021-06.csv', './data/2021-07.csv']
    parser.parseFile(filePaths[0])
    //parser.parseFile(filePaths[1])
    // parser.parseFile(filePaths[2])
}
importFiles()

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
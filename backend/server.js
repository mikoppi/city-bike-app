const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./utils/errorMiddleware')
const connectDB = require('./config/database')
const parser = require('./utils/dataParser')
const cors = require('cors')

const port = process.env.PORT || 5000

connectDB()


const app = express()
//activate cors
app.use(cors());

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/journeys', require('./routes/journeyRoutes.js'))
app.use('/api/stations', require('./routes/stationRoutes.js'))
app.use('/api/details', require('./routes/detailRoutes.js'))
app.use('/api/search', require('./routes/search.js') )

//if database is empty use this function to import all datasets
//ONE AT A TIME! Also MongoDB for some reason wont allow me to
//import all the journey datasets (just 1)

// const importFiles =() => {
//     //const filePaths = ['./data/2021-05.csv', './data/2021-06.csv', './data/2021-07.csv']
//     // parser.parseJourneysFile(filePaths[0])
//     // parser.parseJourneysFile(filePaths[1])
//     // parser.parseJourneysFile(filePaths[2])
//     //parser.parseStationsFile('./data/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv')

// }
// importFiles()

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
const express = require('express')
const stationRouter = express.Router()
const { getStations } = require('../controllers/stationController')

stationRouter.get('/', getStations)

//stationRouter.post('/', setJourneys)

module.exports = stationRouter
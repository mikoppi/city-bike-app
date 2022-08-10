const express = require('express')
const stationRouter = express.Router()
const { getStations } = require('../controllers/stationController')
const paginate = require('../utils/paginate')
const Station = require("../models/stationModel");

stationRouter.get('/', paginate(Station), getStations)

//stationRouter.post('/', setStations)

module.exports = stationRouter
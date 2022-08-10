const express = require('express')
const journeyRouter = express.Router()
const { getJourneys, setJourneys } = require('../controllers/journeyController')
const paginate = require('../utils/paginate')
const Journey = require("../models/journeyModel");

journeyRouter.get('/', paginate(Journey), getJourneys)

journeyRouter.post('/', setJourneys)

module.exports = journeyRouter
const express = require('express')
const journeyRouter = express.Router()
const { getJourneys, setJourneys } = require('../controllers/journeyController')

journeyRouter.get('/', getJourneys)

journeyRouter.post('/', setJourneys)

module.exports = journeyRouter
const express = require('express')
const journeyRouter = express.Router()

journeyRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Get journeys'})
})

module.exports = journeyRouter
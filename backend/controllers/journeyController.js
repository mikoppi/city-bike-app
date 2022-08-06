const asyncHandler = require('express-async-handler')
const Journey = require('../models/journeyModel')

const getJourneys = asyncHandler(async (req, res) => {
    const journeys = await Journey.find()
    res.status(200).json(journeys)
})

const setJourneys = asyncHandler(async (req, res) => {
    if(!req.body.Departure) {
        res.status(400)
        throw new Error("Please add a journey")
    }

    const journey = await Journey.create({
        Departure: req.body.Departure,
        Return: req.body.Return
    })

    res.status(200).json(journey)
})


module.exports = {
    getJourneys,
    setJourneys
}
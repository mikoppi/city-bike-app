const mongoose = require('mongoose')

const journeySchema = mongoose.Schema({
    Departure: {
        type: String,
        required:true
    },
    Return: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Journey', journeySchema)
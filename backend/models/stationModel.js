const mongoose = require("mongoose");

const stationSchema = mongoose.Schema({
    FID: {
        type: String,
        default: undefined
    },
    ID: {
        type: String,
        default: undefined
    },
    Nimi: {
        type: String,
        default: undefined
    },
    Namn: {
        type: String,
        default: undefined
    },
    Name: {
        type: String,
        default: undefined
    },
    Osoite: {
        type: String,
        default: undefined
    },
    Adress: {
        type: String,
        default: undefined
    },
    Kaupunki: {
        type: String,
        default: undefined
    },
    Stad: {
        type: String,
        default: undefined
    },
    Operaattor: {
        type: String,
        default: undefined
    },
    Kapasiteet: {
        type: String,
        default: undefined
    },
    x: {
        type: String,
        default: undefined
    },
    y: {
        type: String,
        default: undefined
    }
});

module.exports = mongoose.model("Station", stationSchema)
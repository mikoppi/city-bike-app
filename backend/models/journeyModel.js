const mongoose = require("mongoose");

const journeySchema = mongoose.Schema({
  Departure: {
    type: String,
    default: undefined
  },
  Return: {
    type: String,
    default: undefined
  },
  "Departure station id": {
    type: String,
    default: undefined
  },
  "Departure station name": {
    type: String,
    default: undefined
  },
  "Return station id": {
    type: String,
    default: undefined
  },
  "Return station name": {
    type: String,
    default: undefined
  },
  "Covered distance (m)": {
    type: String,
    default: undefined
  },
  "Duration (s)": {
    type: String,
    default: undefined
  },
});

module.exports = mongoose.model("Journey", journeySchema);

const mongoose = require("mongoose");

const journeySchema = mongoose.Schema({
  Departure: {
    type: String,
    required: false,
  },
  Return: {
    type: String,
    required: false,
  },
  "Departure station id": {
    type: String,
    required: false,
  },
  "Departure station name": {
    type: String,
    required: false,
  },
  "Return station id": {
    type: String,
    required: false,
  },
  "Return station name": {
    type: String,
    required: false,
  },
  "Covered distance (m)": {
    type: String,
    required: false,
  },
  "Duration (s)": {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Journey", journeySchema);

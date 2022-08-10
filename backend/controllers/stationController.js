const asyncHandler = require("express-async-handler");
const Station = require("../models/stationModel");

const getStations = asyncHandler(async (req, res) => {
  const stations = await Station.find().limit(10);
  res.status(200).json(stations);
});


module.exports = {
    getStations,
    
  };
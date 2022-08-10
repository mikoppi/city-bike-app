const asyncHandler = require("express-async-handler");
//const Station = require("../models/stationModel");

const getStations = asyncHandler(async (req, res) => {
  res.json(res.paginate)
});


module.exports = {
    getStations,
    
  };
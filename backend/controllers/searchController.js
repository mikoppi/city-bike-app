const Station = require("../models/stationModel");
const asyncHandler = require("express-async-handler");

const getSearched = asyncHandler(async (req, res) => {
    const searchedStation = req.query.station;
    const capitalise = searchedStation[0].toUpperCase() + searchedStation.substring(1)
    const station = await Station.find({'Nimi':`${capitalise}`});
    if(station.length===0) {
      res.write('<h1>No results</h1>')
    } else {
      const results = {
      results: [station[0]]
    }
    res.json(results)
    }
    
    
  });



  module.exports = {
    getSearched,
    
  };
const Journey = require("../models/journeyModel");
const asyncHandler = require("express-async-handler");

const getDetails = asyncHandler(async (req, res) => {
  const station = req.query.station;
  const departures = await Journey.find({
    "Departure station id": `${station}`,
  });
  const returns = await Journey.find({ "Return station id": `${station}` });
  const details = {
    stationID: station,
    depAmount: departures.length,
    retAmount: returns.length,
  };
  res.json(details);
});

module.exports = {
  getDetails,
};

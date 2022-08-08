const csv = require("csv-parser");
const fs = require("fs");
const Journey = require("../models/journeyModel");
const asyncHandler = require("express-async-handler");
const journeys = [];
let invalidRows=0;

const parseFile = (filePath) => {
    return new Promise((resolve,reject) => {
        fs.createReadStream(filePath)
          .pipe(csv({}))
          .on('error', (error) => reject(error))
          .on("data", (data) => validateData(data))
          .on('end', (data) => {
            console.log(`Parsing done`)
            resolve(data)
        })
    })
};

const validateData = asyncHandler(async (data) => {
  if (
    data["Departure"] == "" ||
    data["Return"] == "" ||
    data["Departure station id"] == "" ||
    data["Departure station name"] == "" ||
    data["Return station id"] == "" ||
    data["Return station name"] == "" ||
    parseInt(data["Covered distance (m)"]) < 10 ||
    parseInt(data["Duration (s)"]) < 10
  ) {
    invalidRows+=1
    console.log('invalid', invalidRows)
    return;
  } else if(Object.keys(data).length === 0) {
    return
  } else {
    //console.log(data);
    await Journey.create({
      Departure: data.Departure,
      Return: data.Return,
      "Departure station id": data["Departure station id"],
      "Departure station name": data["Departure station name"],
      "Return station id": data["Return station id"],
      "Return station name": data["Return station name"],
      "Covered distance (m)": data["Covered distance (m)"],
      "Duration (s)": data["Duration (s)"],
    });
  }
  
});

module.exports = {
  parseFile,
};
//parseFile('./data/journeysTestData.csv')

//node backend/utils/dataParser.js

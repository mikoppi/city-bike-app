const csv = require("fast-csv");
const fs = require("fs");
const Journey = require("../models/journeyModel");
const Station = require("../models/stationModel");

const parseJourneysFile = (filePaths) => {
    console.log(`Started adding document ${filePaths} to MongoDB`);
    let journeys = [];
    let invalidRows = 0;
    let counter = 0;     
    let readStream = fs.createReadStream(filePaths);
    let insertStream = csv
    .parse({ headers: true, ignoreEmpty: true })
    //check for invalid rows with a function
    .validate((data) => validateJourneys(data))
    .on("data", async (data) => {
        ++counter;
        journeys.push({ ...data });
        if (counter >= 500) {
            //data needs be inserted in chunks of 500 (for example) to avoid a crash
            insertStream.pause();
            await Journey.insertMany(journeys);
            counter = 0;
            journeys = [];
            insertStream.resume();
        }
    })
    .on("data-invalid", () => ++invalidRows)
    .on("error", (error) => {
        console.log('oh no', error)})
    .on("end", async (rowCount) => {
        //when the counter doesn't go over 500 anymore we insert the rest
        console.log(`Parsing done`);
        await Journey.insertMany(journeys);
        journeys = [];
        console.log(
            `Added ${rowCount - invalidRows} documents to database, found ${invalidRows} invalid rows.`
            );
        });
        readStream.pipe(insertStream);
    };

    
const validateJourneys = (data) => {
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
        return false;
    } else {
        return true;
    }
};


const parseStationsFile = (filePaths) => {
    console.log(`Started adding document ${filePaths} to MongoDB`);
    let stations = [];   
    let readStream = fs.createReadStream(filePaths);
    let insertStream = csv
    .parse({ headers: true, ignoreEmpty: true })
    .on("data", (data) => {
        stations.push({ ...data });
    })
    .on("error", (error) => {
        console.log('oh no', error)})
    .on("end", async (rowCount) => {
        console.log(`Parsing done`);
        await Station.insertMany(stations);
        stations = [];
        console.log(
            `Added ${rowCount} documents to database`
            );
        });
        readStream.pipe(insertStream);
    };
    


module.exports = {
    parseJourneysFile,
    parseStationsFile
};

// if database is empty use these to import all datasets
//parseFile('./data/2021-05.csv')
// parseFile('./data/2021-06.csv')
// parseFile('./data/2021-07.csv')

//node backend/utils/dataParser.js
// await Journey.create({
    //   Departure: data.Departure,
    //   Return: data.Return,
    //   "Departure station id": data["Departure station id"],
    //   "Departure station name": data["Departure station name"],
//   "Return station id": data["Return station id"],
//   "Return station name": data["Return station name"],
//   "Covered distance (m)": data["Covered distance (m)"],
//   "Duration (s)": data["Duration (s)"],
// });

const fs = require('fs');
const csv = require('csv');
const path = require('path');
//const csvParse = require("csv-parser");

FILE = path.join('./data/journeysTestData.csv');
NEW_FILE = path.join('./data/OUT.json');

const readStream = fs.createReadStream(FILE);
const writeStream = fs.createWriteStream(NEW_FILE);

const parse = csv.parse({columns:true})

// const transform = csv.transform((data) => {
//   if (
//     data["Departure"] == "" ||
//     data["Return"] == "" ||
//     data["Departure station id"] == "" ||
//     data["Departure station name"] == "" ||
//     data["Return station id"] == "" ||
//     data["Return station name"] == "" ||
//     parseInt(data["Covered distance (m)"]) < 10 ||
//     parseInt(data["Duration (s)"]) < 10
//   ) {
//     return;
//   } else {
//     return data
//   }
// });

readStream.pipe(parse).pipe(csv.stringify({header: true})).pipe(writeStream);

//node backend/utils/csvtojson.js
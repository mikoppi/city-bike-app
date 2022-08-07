const csv = require('csv-parser')
const fs = require('fs')
const journeys = []


const parseFile = (filePath) => {

    fs.createReadStream(filePath)
        .pipe(csv({}))
        .on('data', (data) => validateData(data))
        .on('end', () => {
            console.log(`Parsing done`)
            
        })
}

const validateData = (data) => {
    if (data['Duration (sec.)'] >= 10 && data['Covered distance (m)'] >= 10){
        journeys.push(data)
    }
    console.log(journeys)
}


parseFile('./data/journeysTestData.csv')



//node backend/utils/dataParser.js
const fs =require('fs')
const csv = require('csvtojson');

function convertCSVToJSON(inputFile, outputFile){
    csv().fromFile(inputFile).then((json)=>{
        fs.writeFileSync(outputFile, JSON.stringify(json));
    });
}

module.exports  = convertCSVToJSON;
function findMatchesPerYear(matches){
    let matchesPlayedByseason ={}

    matches.forEach(match => {
        let season = match.season;
        if(matchesPlayedByseason[season]){
            matchesPlayedByseason[season]++;
        }else{
            matchesPlayedByseason[season] = 1;
        }
    });


    const fs = require('fs');

        fs.writeFileSync('./../public/matchesPerYear.json', JSON.stringify(matchesPlayedByseason))
}
const matches = require("./../data/matches.json") 
findMatchesPerYear(matches);
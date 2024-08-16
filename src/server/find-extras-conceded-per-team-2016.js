function findExtraConcededPerTeam2016(matches, deliveries){
    let extrasConcededPerTeam ={}
    let matchesSet = new Set;

    matches.forEach(match=>{
        if(match.season == 2016)
        matchesSet.add(match.id);
    });

    deliveries.forEach(delivery => {
        if(!matchesSet.has(delivery.match_id))
            return;

        let team = delivery.bowling_team;
        let extras = delivery.extra_runs;
        if(extrasConcededPerTeam[team]){
            extrasConcededPerTeam[team] += Number(extras);
        }else{
            extrasConcededPerTeam[team] = Number(extras);
        }
    });


    const fs = require('fs');
        fs.writeFileSync('./../public/3.json', JSON.stringify(extrasConcededPerTeam))
}
const matches = require("./../data/matches.json") 
const deliveries = require("./../data/deliveries.json") 
findExtraConcededPerTeam2016(matches, deliveries);
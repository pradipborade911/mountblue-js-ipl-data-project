function findTheMostEconomicalBowlerIn2015(matches, deliveries){
    let bowlerStats ={}
    let matchesSet = new Set;

    matches.forEach(match=>{
        if(match.season == 2015)
        matchesSet.add(match.id);
    });

    deliveries.forEach(delivery => {
        if(!matchesSet.has(delivery.match_id))
            return;

        let bowler = delivery.bowler;
        let runsConceded = delivery.total_runs - delivery.legbye_runs - delivery.bye_runs;
        let ballsBowled = (delivery.noball_runs > 0 || delivery.wide_runs > 0)? 0 : 1;

        if(bowlerStats[bowler]){
            bowlerStats[bowler]["runsConceded"] += Number(runsConceded);
            bowlerStats[bowler]["ballsBowled"] += Number(ballsBowled);
        }else{
            bowlerStats[bowler] = {"runsConceded" : Number(runsConceded), "ballsBowled" : Number(ballsBowled)};
        }
    });

    let bestEconomy = 1000000;
    let bowlerName = "Unknown";
    for(let bowler in bowlerStats){
        let thisEconomy = bowlerStats[bowler]["runsConceded"]/(bowlerStats[bowler]["ballsBowled"]/6);
        console.log(thisEconomy)
        if(thisEconomy < bestEconomy){
            bestEconomy = thisEconomy;
            bowlerName = bowler;
        }
    };


    const fs = require('fs');
    fs.writeFileSync('./../public/4.json', JSON.stringify({bowler: bowlerName, economy:bestEconomy}))
}
const matches = require("./../data/matches.json") 
const deliveries = require("./../data/deliveries.json") 
findTheMostEconomicalBowlerIn2015(matches, deliveries);
const findMatchesPerYear = require("./1-matches-per-year");
const findMatchesWonPerTeamPerYear = require("./2-matches-won-per-team-per-year");
const findExtrasConcededPerTeam2016 = require("./3-find-extras-conceded-per-team-2016");
const findMostEconomicalBowlerIn2015 = require("./4-find-the-most-economical-bowler-2015");

const matches = require("../data/matches.json")
const deliveries = require("../data/deliveries.json");
const storeResultToJSON = require("./store");


storeResultToJSON('./../public/matchesPerYear.json',
    findMatchesPerYear(matches)
);

storeResultToJSON('./../public/matchesWonPerTeamPerYear.json',
    findMatchesWonPerTeamPerYear(matches)
);

storeResultToJSON('./../public/extraRunsConcededPerTeam2016.json',
    findExtrasConcededPerTeam2016(matches, deliveries)
);

storeResultToJSON('./../public/mostEconomicalBowlerIn2015.json',
    findMostEconomicalBowlerIn2015(matches, deliveries)
);


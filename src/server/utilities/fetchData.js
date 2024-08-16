const convertCSVToJSON = require("./convertCSVToJSON");

const matchesCSVPath = "./../../data/matches.csv";
const matchesJSONPath = "./../../data/matches.json";
convertCSVToJSON(matchesCSVPath, matchesJSONPath);
const deliveriesCSVPath = "./../../data/deliveries.csv";
const deliveriesJSONPath = "./../../data/deliveries.json";
convertCSVToJSON(deliveriesCSVPath, deliveriesJSONPath);

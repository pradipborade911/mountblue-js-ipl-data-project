function findMatchesPerYear(matches) {
    let matchesPlayedByseason = {}

    matches.forEach(match => {
        let season = match.season;
        if (matchesPlayedByseason[season]) {
            matchesPlayedByseason[season]++;
        } else {
            matchesPlayedByseason[season] = 1;
        }
    });

    return matchesPlayedByseason;
}

module.exports = findMatchesPerYear;
function findMatchesWonPerTeamPerYear(matches) {
    let matchesWonPerTeamPerYear = {}

    matches.forEach(match => {
        let season = match.season;
        let team = match.winner;
        if (matchesWonPerTeamPerYear[season]) {
            if (matchesWonPerTeamPerYear[season][team]) {
                matchesWonPerTeamPerYear[season][team]++;
            } else {
                matchesWonPerTeamPerYear[season][team] = 1;
            }
        } else {
            let teamData = {}
            teamData[team] = 1;
            matchesWonPerTeamPerYear[season] = teamData;
        }
    });

    return matchesWonPerTeamPerYear;
}

module.exports = findMatchesWonPerTeamPerYear;
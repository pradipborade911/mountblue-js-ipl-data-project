function findExtrasConcededPerTeam2016(matches, deliveries) {
    let extrasConcededPerTeam = {}
    let matchesSet = new Set;

    matches.forEach(match => {
        if (match.season == 2016)
            matchesSet.add(match.id);
    });

    deliveries.forEach(delivery => {
        if (!matchesSet.has(delivery.match_id))
            return;

        let team = delivery.bowling_team;
        let extras = delivery.extra_runs;
        if (extrasConcededPerTeam[team]) {
            extrasConcededPerTeam[team] += Number(extras);
        } else {
            extrasConcededPerTeam[team] = Number(extras);
        }
    });
    
    return extrasConcededPerTeam;
}

module.exports = findExtrasConcededPerTeam2016;
let games = (['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);

function countPoints() {

    let totalScore = 0;

    for (let i = 0; i < games.length; i++) {
        let homeScore = parseInt(games[i].charAt(0));
        let awayScore = parseInt(games[i].charAt(2));

        if (homeScore > awayScore) {
            totalScore += 3;
        } else if (homeScore === awayScore) {
            totalScore += 1;
        }
    }
    return totalScore;
}

countPoints();
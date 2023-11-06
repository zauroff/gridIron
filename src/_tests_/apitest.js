async function getCurrentWeekData() {
    const response = await fetch("https://football-data-api-92a7c1537ec2.herokuapp.com/getCurrentWeekScores");
    const scores = await response.json();
    return scores;
}


const rawscores = await getCurrentWeekData()
const scores = JSON.parse(rawscores)

for (var i = 0; i < scores.length; i ++)
{
    var scorecard = scores[i]
    // console.log(scorecard)
    console.log(scorecard)
}

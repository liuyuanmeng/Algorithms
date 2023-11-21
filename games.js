// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", 
// where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

  // if x > y: 3 points(win) if x < y: 0 points(loss) if x = y: 1 point(tie)

// We need to write a function called points that takes this collection and returns the number of points our team(x) 
// got in the championship by the rules given above.

  Notes:

// our team always plays 10 matches in the championship 0 <= x <= 4 0 <= y <= 4

function points(games) {
  let total = 0
  games.forEach(game => {
    const [x, y] = game.split(':').map(Number)
    // check win + 3, tie + 1, loss no change
    if (x > y) {
      total += 3
    } else if (x === y) {
      total += 1
    }
  })
  return total
}

// Example usage:
const matchResults = ["3:1", "2:2", "0:1", "4:0", "1:1", "2:0", "0:0", "1:2", "3:3", "4:4"]
const teamPoints = points(matchResults)
console.log(teamPoints) // This should output the total points for the team



function testNum(numbers) {
  const convertedNumbers = numbers.map((element) => Number(element));
  return convertedNumbers;
}

console.log(testNum(['1', '2', '3']));

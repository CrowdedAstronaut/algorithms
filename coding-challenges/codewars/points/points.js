const points = (games) => {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    const x = parseInt(games[i].charAt(0));
    const y = parseInt(games[i].charAt(2));
    if (x > y) {
      points += 3;
    } else if (x < y) {
      points;
    } else if (x === y) {
      points += 1;
    }
  }
  return points;
};

points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]);

//Crazy Codewars solution
const sexyPoints = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

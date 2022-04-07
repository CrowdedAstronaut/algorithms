function backToHome(directions) {
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
      case "N":
        north++;
        break;
      case "S":
        south++;
        break;
      case "E":
        east++;
        break;
      case "W":
        west++;
        break;
    }
  }
  if (north === south && east === west) {
    return true;
  } else {
    return false;
  }
}

//Edabit solution
function backToHome(directions) {
  let values = { N: 1, S: -1, E: -1, W: 1 };
  directions = (directions + "").split("");
  let sumOfValues = directions.reduce(
    (ac, cur) => ac + values[cur],
    0
  );
  return sumOfValues === 0 ? true : false;
}

function backToHome(directions) {
  let north = directions.split("N").length - 1;
  let south = directions.split("S").length - 1;
  let east = directions.split("E").length - 1;
  let west = directions.split("W").length - 1;

  if (north == south && east == west) {
    return true;
  }

  return false;
}

//Nice Edabit solution using .map()
function backToHome(directions) {
  const [n, w, s, e] = ["N", "W", "S", "E"].map(
    (d) => directions.split(d).length - 1
  );
  return n === s && w === e;
}

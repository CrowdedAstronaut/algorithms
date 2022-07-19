function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;
  let array = path.split("");
  for (let i = 0; i < steps; i++) {
    if (array[i] === "D") {
      elevation--;
    } else if (array[i] === "U") {
      if (elevation == -1) {
        valleys++;
      }
      elevation++;
    }
  }
  return valleys;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));

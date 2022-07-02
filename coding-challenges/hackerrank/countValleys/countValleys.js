function countingValleys(n, s) {
  const min = 2;
  const max = 1000000;
  let valleys = 0;
  let isInValley = false;

  s = typeof s === "string" ? s.split("") : s;

  if (
    s.length >= min &&
    s.length <= max &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= max &&
    n === s.length
  ) {
    s = s.map((steps) => (steps === "U" ? 1 : -1));

    let path = 0;
    for (let i in s) {
      path += s[i];
      if (path < 0 && !isInValley) {
        isInValley = true;
      }
      if (path == 0 && isInValley) {
        valleys++;
        isInValley = false;
      }
    }
  }

  return valleys;
}

function betterThanAverage(classPoints, yourPoints) {
  let average =
    classPoints.reduce((a, b) => a + b) /
    classPoints.length;
  return yourPoints > average ? true : false;
}

console.log(
  betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)
);

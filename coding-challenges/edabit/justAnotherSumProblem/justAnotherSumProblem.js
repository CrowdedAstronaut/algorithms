function justAnotherSumProblem(a, b) {
  let array = [];
  let rangeLow = Math.min(a, b);
  let rangeHigh = Math.max(a, b);
  for (let i = rangeLow; i <= rangeHigh; i++) {
    array.push(i);
  }
  return array.reduce((acc, val) => acc + val);
}

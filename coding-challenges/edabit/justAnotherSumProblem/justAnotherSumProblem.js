function justAnotherSumProblem(a, b) {
  let array = [];
  let rangeLow = Math.min(a, b);
  let rangeHigh = Math.max(a, b);
  for (let i = rangeLow; i <= rangeHigh; i++) {
    array.push(i);
  }
  return array.reduce((acc, val) => acc + val);
}

//Recursion solution from Edabit
function justAnotherSumProblem(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  if (min == max) {
    return max;
  }
  return min + justAnotherSumProblem(min + 1, max);
}

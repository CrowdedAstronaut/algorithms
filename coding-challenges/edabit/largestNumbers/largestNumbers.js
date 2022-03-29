const largestNumbers = (n, arr) =>
  //sort the array in ascending order
  //because then it is easiest to grab the largest value
  //n and slice it off of the end.
  arr.sort((a, b) => a - b).slice(arr.length - n);

function largestNumbersLoop(n, arr) {
  let result = [];
  let sorted = arr.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    result.unshift(sorted[i]);
  }
  return result;
}

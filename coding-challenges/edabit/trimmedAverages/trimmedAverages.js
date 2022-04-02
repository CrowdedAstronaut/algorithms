function trimmedAverages(arr) {
  let sorted = arr.sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();
  return Math.round(sorted.reduce((a, b) => a + b) / sorted.length);
}

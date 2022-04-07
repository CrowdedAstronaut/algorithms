function mean(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return Number((sum / arr.length).toFixed(2));
}

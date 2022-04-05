function battingAvg(arr) {
  let hitsArray = arr.map((subarray) => subarray[0]);
  let batsArray = arr.map((subarray) => subarray[1]);
  let numerator = hitsArray.reduce((a, b) => a + b);
  let denominator = batsArray.reduce((a, b) => a + b);
  return (numerator / denominator).toFixed(3).substring(1);
}

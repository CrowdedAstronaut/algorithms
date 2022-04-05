//My solution
function battingAvg(arr) {
  let hitsArray = arr.map((subarray) => subarray[0]);
  let batsArray = arr.map((subarray) => subarray[1]);
  let numerator = hitsArray.reduce((a, b) => a + b);
  let denominator = batsArray.reduce((a, b) => a + b);
  return (numerator / denominator).toFixed(3).substring(1);
}

//Edabit Solution
function battingAvg(arr) {
  let hits = 0;
  let atBats = 0;
  for (let i = 0; i < arr.length; i++) {
    hits += arr[i][0];
    atBats += arr[i][1];
  }
  let avg = (hits / atBats).toFixed(3);
  return avg.slice(1);
}

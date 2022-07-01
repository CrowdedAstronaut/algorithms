function positiveSum(arr) {
  let positiveArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveArray.push(arr[i]);
    }
  }
  return positiveArray.length > 0
    ? positiveArray.reduce((a, b) => a + b)
    : 0;
}

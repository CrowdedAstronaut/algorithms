function sliceSum(arr, n) {
  let slice = arr.slice(0, n);
  return slice.length > 0
    ? slice.reduce((a, b) => a + b)
    : 0;
}

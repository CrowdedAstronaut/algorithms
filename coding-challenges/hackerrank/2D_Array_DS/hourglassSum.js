function hourglassSum(arr) {
  let array = [],
    count = -63;
  // Write your code here
  for (let array_i = 0; array_i < 6; array_i++) {
    array[array_i] = readLine().split(" ");
    array[array_i] = array[array_i].map(Number);
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum;
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (sum > count) {
        count = sum;
      }
    }
  }
  return count;
}

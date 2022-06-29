function sockMerchant(n, ar) {
  const sortedArr = ar.sort();
  let pairs = 0;
  let currentPosition = 0;
  let nextPosition = 0;
  // Write your code here
  for (let i = 0; i < n - 1; i++) {
    currentPosition = sortedArr[i];
    nextPosition = sortedArr[i + 1];
    if (currentPosition === nextPosition) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

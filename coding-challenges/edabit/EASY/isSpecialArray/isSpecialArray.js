function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== arr[i] % 2) {
      return false;
    }
  }
  return true;
}

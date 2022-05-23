function divisible(arr) {
  let product = arr.reduce((a, b) => a * b);
  let sum = arr.reduce((a, b) => a + b);
  return product % sum === 0 ? true : false;
}

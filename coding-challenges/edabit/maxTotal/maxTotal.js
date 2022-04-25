function maxTotal(nums) {
  let array = Object(nums).sort((a, b) => a - b);
  return array.slice(5).reduce((a, b) => a + b);
}

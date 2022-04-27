function squareSum(numbers) {
  let sumArray = numbers.map((number) =>
    Math.pow(number, 2)
  );
  return numbers.length === 0
    ? 0
    : sumArray.reduce((a, b) => a + b);
}

function sumDigits(number) {
  let positive = Math.abs(number);
  let sum = positive
    .toString()
    .split("")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);

  return sum;
}

sumDigits(10);

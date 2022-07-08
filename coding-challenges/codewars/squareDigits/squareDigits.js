const squareDigits = (num) =>
  parseInt(
    String(num)
      .split("")
      .map((x) => parseInt(x) ** 2)
      .reduce((a, x) => a + String(x))
  );

console.log(squareDigits(3212));

function squareDigits(n) {
  let string = n
    .toString()
    .split("")
    .map((item) => Math.pow(item, 2))
    .join("");
  return Number(string);
}

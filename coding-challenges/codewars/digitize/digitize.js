const digitize = (n) =>
  String(n)
    .split("")
    .reverse()
    .map((item) => Number(item));

console.log(digitize(35231));

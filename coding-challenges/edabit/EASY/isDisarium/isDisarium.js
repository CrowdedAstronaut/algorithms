//Edabit solution I can understand

function isDisarium(n) {
  const numsArr = n
    .toString()
    .split("")
    .map((x) => Number(x));
  let position = 1;
  for (let i = 0; i < numsArr.length; i++) {
    numsArr[i] = Math.pow(numsArr[i], position);
    position += 1;
  }
  return numsArr.reduce((acc, curr) => acc + curr) === n;
}

//Edabit solution - elegant
const isDisarium = (n) =>
  [...String(n)].reduce((a, b, i) => a + b ** (i + 1), 0) === n;

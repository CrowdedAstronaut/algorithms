function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

const roundToNext5 = (n) => {
  while (n % 5 !== 0) n++;
  return n;
};
console.log(roundToNext5(21));

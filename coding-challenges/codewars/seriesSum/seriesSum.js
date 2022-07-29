function SeriesSum(n) {
  let numerator = 1;
  let denominator = 1;
  let answers = [];
  let final;
  for (let i = 1; i < n; i++) {
    denominator += 3;
    answers.push(numerator / denominator);
  }
  if (answers.length > 0) final = [...answers].reduce((a, b) => a + b) + 1;
  return n === 0 ? "0.00" : n === 1 ? "1.00" : final.toFixed(2);
}

//short ass CodeWars answer
const SeriesSum = (n) => {
  for (let s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
};

console.log(SeriesSum(1));

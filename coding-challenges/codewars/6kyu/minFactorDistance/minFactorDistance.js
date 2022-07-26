function minDistance(n) {
  let factors = [];

  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  factors.push(n);
  let answers = factors
    .reverse()
    .slice(0, -1)
    .map((item, idx) => item - factors[idx + 1])
    .sort((a, b) => a - b);
  return answers[0];
}

console.log(minDistance(25));

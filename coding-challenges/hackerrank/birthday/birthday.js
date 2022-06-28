const birthday = (s, d, m) => {
  // Write your code here
  let i = 0;
  let j = m;
  let count = 0;
  while (j <= s.length) {
    let slice = s.slice(i, j);
    if (slice.reduce((a, b) => a + b) === d) {
      count += 1;
    }
    i += 1;
    j += 1;
  }
  return count;
};

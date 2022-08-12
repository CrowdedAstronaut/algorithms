function getDivSum(n) {
  let result = 0;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      result += i;
    } else if (n % i === 0) {
      result += i + n / i;
    }
  }
  return result;
}

function intCubeSumDiv(n) {
  let start = 5;
  while (n > 0) {
    start++;
    if ((start * start * start) % getDivSum(start) === 0) {
      n--;
    }
  }
  return start;
}

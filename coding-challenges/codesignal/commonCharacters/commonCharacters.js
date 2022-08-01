function solution(s1, s2) {
  let a1 = s1.split("").sort();
  let y = s2;
  let count = 0;

  while (a1.length) {
    const x = a1.pop();
    if (y.includes(x)) count++;
    y = y.replace(x, "");
  }
  return count;
}

console.log(solution("aabcc", "adcaa"));

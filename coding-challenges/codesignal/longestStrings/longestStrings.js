function solution(inputArray) {
  let maxLength = Math.max(
    ...inputArray.map((item) => item.length)
  );
  return inputArray.filter(
    (item) => item.length === maxLength
  );
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));

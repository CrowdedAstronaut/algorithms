function firstNonConsecutive(arr) {
  let digit = 0;
  let sorted = arr.sort((a, b) => a + b).map((item) => Math.abs(item));
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] > 1) {
      digit = sorted[i];
      break;
    }
  }
  return arr.length === 0 ? 0 : digit === 0 ? null : digit;
}
console.log(firstNonConsecutive([-5, -3, -2, -1, 0, 1, 2, 3, 4]));

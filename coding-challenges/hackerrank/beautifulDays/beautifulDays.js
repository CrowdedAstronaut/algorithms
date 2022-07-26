function beautifulDays(i, j, k) {
  let days = 0;
  let reverse = 0;

  let array = Array(j - i + 1)
    .fill()
    .map((_, idx) => i + idx);

  for (let index = i; index <= j; index++) {
    reverse = Number(
      String([index]).split("").reverse().join("")
    );
    if ((index - reverse) % k === 0) {
      days++;
    }
  }
  return days;
}

console.log(beautifulDays(20, 23, 6));

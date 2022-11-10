function numberJoy(n) {
  let nums = n
    .toString()
    .split("")
    .map((item) => Number(item));
  let digitsum = nums.reduce((a, b) => a + b);
  let reverse = Number(
    digitsum.toString().split("").reverse().join("")
  );

  return digitsum * reverse === n ? true : false;
}

numberJoy(1997);

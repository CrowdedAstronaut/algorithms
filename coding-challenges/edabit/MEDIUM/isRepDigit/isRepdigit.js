function isRepdigit(num) {
  return String(num)
    .split("")
    .every((x, i, arr) => x === arr[0]);
}

console.log(isRepdigit(1001));
// console.log(isRepdigit(1001));

function toArray(num) {
  return [...num.toString()].map((item) => Number(item));
}

function toNumber(arr) {
  let numbers = arr.map((item) => Number(item));
  return Number(numbers.join(""));
}

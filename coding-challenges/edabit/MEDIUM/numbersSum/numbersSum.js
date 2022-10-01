function numbersSum(arr) {
  let empty = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element == "number") {
      empty.push(element);
    }
  }
  return empty.length === 0
    ? 0
    : empty.reduce((a, b) => a + b);
}

function arrayOperation(x, y, n) {
  let array = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) {
      array.push(i);
    }
  }
  return array;
}

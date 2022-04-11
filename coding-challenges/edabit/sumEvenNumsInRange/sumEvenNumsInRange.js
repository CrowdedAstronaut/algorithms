function sumEvenNumsInRange(start, stop) {
  let sum = 0;
  for (let i = start; i <= stop; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

function sumEvenNumsInRange(start, stop) {
  let arr = [];
  for (let i = start; i <= stop; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
}

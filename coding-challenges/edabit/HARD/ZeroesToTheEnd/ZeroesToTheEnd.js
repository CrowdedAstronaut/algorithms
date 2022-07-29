function zeroesToEnd(a) {
  let sorted = a.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === 0) sorted.shift();
  }
  return sorted;
}

console.log(zeroesToEnd([6, 2, 0, 0, 4, 0, 5]));

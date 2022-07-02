function closeCompare(a, b, margin) {
  if (margin >= Math.abs(a - b) || a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
}

console.log(closeCompare(5, 5));

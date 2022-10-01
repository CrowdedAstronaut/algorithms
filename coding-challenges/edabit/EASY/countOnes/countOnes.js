function countOnes(matrix) {
  let flatArray = matrix.flat(Infinity);
  let count = 0;
  for (let i = 0; i < flatArray.length; i++) {
    const element = flatArray[i];
    if (element === 1) {
      count++;
    }
  }
  return count;
}

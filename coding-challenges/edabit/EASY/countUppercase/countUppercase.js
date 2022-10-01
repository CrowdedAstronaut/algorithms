function countUppercase(str) {
  let array = str.join("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      // this method doesn't seem to work ...
      sum++;
    }
  }
  return sum;
}

const birthdayCakeCandles = (arr) => {
  let max = Math.max(...arr);
  return arr.filter((item) => item === max).length;
};

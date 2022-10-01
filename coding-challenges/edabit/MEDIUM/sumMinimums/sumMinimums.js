const sumMinimums = (arr) => {
  const findSmallest = (array) =>
    array.reduce((acc, val) => {
      return Math.min(acc, val);
    }, Infinity);
  let sum = 0;
  arr.forEach((sub) => {
    sum += findSmallest(sub);
  });
  return sum;
};

const sumMinimumsLoop = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.min(...arr[i]);
  }
  return count;
};

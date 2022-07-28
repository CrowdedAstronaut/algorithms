const findDifference = (a, b) => {
  let values = [
    a.reduce((a, b) => a * b),
    b.reduce((a, b) => a * b),
  ];

  return Math.max(...values) - Math.min(...values);
};

console.log(findDifference([3, 2, 5], [1, 4, 4]));

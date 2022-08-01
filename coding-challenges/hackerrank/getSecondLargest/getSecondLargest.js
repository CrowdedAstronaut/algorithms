const getSecondLargest = (nums) => {
  let unique = Array.from(new Set(nums)).sort((a, b) => a - b);

  return unique[unique.length - 2];
};

console.log(getSecondLargest([2, 3, 6, 6, 5]));

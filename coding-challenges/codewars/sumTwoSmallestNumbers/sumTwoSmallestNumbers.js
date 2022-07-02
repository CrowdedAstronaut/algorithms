const sumTwoSmallestNumbers = (numbers) => {
  function compareNumbers(a, b) {
    return a - b;
  }
  let sorted = numbers.sort(compareNumbers);
  return sorted[0] + sorted[1];
};

sumTwoSmallestNumbers([15, 28, 4, 2, 43]);

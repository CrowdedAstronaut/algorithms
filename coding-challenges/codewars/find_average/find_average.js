const find_average = (array) =>
  array.length > 0
    ? array.reduce((a, b) => a + b) / array.length
    : 0;

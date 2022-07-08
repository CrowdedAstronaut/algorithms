const sumArray = (array) => {
  array = Array.from(array ?? []);
  array.sort((a, b) => a - b);

  array.pop(); // remove last/higest value.
  array.shift(); // remove first/lowest value.

  return array.reduce((total, value) => total + value, 0);
};

const getLength = (arr) => arr.flat(Infinity).length;

//Edabit forEach Solution
function getLength(arr) {
  let count = 0;
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      count += getLength(item);
    } else {
      count++;
    }
  });
  return count;
}

//Edabit solution using .reduce and recursion
function getLength(arr) {
  return arr.reduce((acc, el, index) => {
    return Array.isArray(el)
      ? acc + getLength(el)
      : acc + 1;
  }, 0);
}

function countCharacters(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let result = arr.reduce(reducer, 0);
  return result.length > 0 ? result.length - 1 : 0;
}

const countCharacters = (arr) => arr.join("").length;

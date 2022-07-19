function findMultiples(int, limit) {
  let temp = 0,
    empty = [],
    length = Math.floor(limit / int);
  for (let i = 0; i < length; i++) {
    empty.push((temp += int));
  }
  return empty;
}

const findMultiples = (int, limit) => {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
};

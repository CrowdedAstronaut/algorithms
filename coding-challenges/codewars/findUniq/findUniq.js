function findUniq(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let unique = Array.from(new Set(arr));
  if (unique[1] !== sorted[1]) return unique[1];
  else return unique[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));

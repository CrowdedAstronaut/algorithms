function sortArray(arr) {
  const odds = arr
    .filter((x) => x % 2)
    .sort((a, b) => a - b);

  return arr.map((x) => (x % 2 ? odds.shift() : x));
}

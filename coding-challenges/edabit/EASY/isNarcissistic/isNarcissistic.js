function isNarcissistic(n) {
  return (
    n
      .toString()
      .split("")
      .map((x, i, arr) => x ** arr.length)
      .reduce((a, b) => +a + +b) === n
  );
}

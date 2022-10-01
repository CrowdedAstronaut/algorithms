//Remember this pattern for sort descending sort
function sortDescending(num) {
  return parseFloat(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

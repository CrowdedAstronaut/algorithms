const squares = (a, b) => {
  let count = 0;
  for (let i = a; i <= b; i++)
    if (Number.isInteger(Math.sqrt(i))) count++;
  return count;
};

console.log(squares(24, 49));

function squares(a, b) {
  let square = 0,
    i = 1,
    count = 0;
  while (square <= b) {
    square = i * i;
    if (square >= a && square <= b) {
      count += 1;
    }
    i += 1;
  }
  return count;
}

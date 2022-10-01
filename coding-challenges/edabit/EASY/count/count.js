const count = (n) => ((n / 10) | 0 ? 1 + count(n / 10) : 1);

//Edabit Solution
function count(n) {
  if (n < 0) n *= -1;
  if (n === 0) return 1;
  return Math.ceil(Math.log10(n));
}

//Nice easy to read Edabit solution
function count(n) {
  if (n === 0) return 1;

  const newN = Math.abs(n);
  let count = 0;
  let divisor = 1;
  let result = 1;

  while (result >= 1) {
    if (newN / divisor < 1) {
      break;
    } else {
      count++;
      divisor *= 10;
      result = newN / divisor;
    }
  }

  return count;
}

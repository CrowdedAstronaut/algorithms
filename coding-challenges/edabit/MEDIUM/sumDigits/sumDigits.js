const sumDigits = (n) => {
  let count = 0;
  if (n >= 0) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  return count;
};

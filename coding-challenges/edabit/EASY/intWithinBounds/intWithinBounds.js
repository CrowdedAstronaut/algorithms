const intWithinBounds = (n, lower, upper) =>
  n >= lower && n < upper && Number.isInteger(n)
    ? true
    : false;

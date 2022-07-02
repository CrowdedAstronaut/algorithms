const findNextSquare = (sq) =>
  Math.sqrt(sq) % 1 === typeof "integer"
    ? Math.pow(Math.sqrt(sq + 1), 2)
    : -1;

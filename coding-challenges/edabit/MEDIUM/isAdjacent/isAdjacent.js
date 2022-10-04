function isAdjacent(matrix, node1, node2) {
  if (matrix[node1][node2] === 1) return true;
  else return false;
}

console.log(
  isAdjacent(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ],
    0,
    2
  )
);

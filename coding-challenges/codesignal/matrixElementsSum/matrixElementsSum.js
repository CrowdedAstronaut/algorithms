function solution(matrix) {
  let count = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      else count = count += matrix[j][i];
    }
  }
  console.log(count);
}

matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

solution(matrix);

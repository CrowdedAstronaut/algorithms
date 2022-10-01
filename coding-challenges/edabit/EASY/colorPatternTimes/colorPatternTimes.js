function colorPatternTimes(cols) {
  let arr = [cols[0]];
  for (let col of cols) {
    if (arr[arr.length - 1] !== col) arr.push(col);
  }
  return arr.length - 1 + cols.length * 2;
}

const colorPatternTimes = (cols) =>
  cols.length * 2 + cols.slice(1).filter((c, i) => c !== cols[i]).length;

function colorPatternTimes(cols) {
  let x = cols.length;
  let sw = 0;
  for (i = 0; i < x - 1; i++) {
    if (cols[i] != cols[i + 1]) sw++;
  }
  return x * 2 + sw;
}

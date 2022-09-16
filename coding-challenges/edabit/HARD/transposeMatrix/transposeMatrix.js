const transposeMatrix = (arr) =>
  arr[0]
    .map((_, y) => arr.map((row) => row[y]).join(" "))
    .join(" ");

console.log(
  transposeMatrix([
    ["The", "are"],
    ["columns", "rows."],
  ])
);

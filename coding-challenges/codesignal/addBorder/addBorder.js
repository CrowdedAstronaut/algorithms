const addBorder = (matrix) => {
  let row = new Array(matrix[0].length + 2).fill("*").join("");
  const newPicture = matrix.map((item) => "*" + item + "*");
  newPicture.unshift(row);
  newPicture.push(row);
  return newPicture;
};

addBorder(["abc", "ded"]);

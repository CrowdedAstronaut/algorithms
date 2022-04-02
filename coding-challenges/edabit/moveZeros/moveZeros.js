const moveZeros = (arr) => {
  let zeros = arr.filter((item) => item === 0);
  let nonZeros = arr.filter((item) => item !== 0);
  return nonZeros.concat(zeros);
};

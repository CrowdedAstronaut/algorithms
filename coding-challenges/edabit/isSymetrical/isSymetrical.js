const isSymmetrical = (num) => {
  let reversedArray = Object(num)
    .toString()
    .split("")
    .reverse()
    .join("");
  return num == Number(reversedArray) ? true : false;
};

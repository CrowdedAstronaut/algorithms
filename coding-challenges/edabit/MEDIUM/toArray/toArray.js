const toArray = (num) => {
  let stringArray = num.toString().split("");
  return stringArray.map((item) => Number(item));
};
const toNumber = (arr) => Number(arr.join(""));

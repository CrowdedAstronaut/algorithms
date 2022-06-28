const addNums = (nums) => {
  let array = nums.split(",");
  let numberArray = array.map((number) => Number(number));
  return numberArray.reduce((a, b) => a + b);
};

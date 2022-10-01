function unlucky13(nums) {
  let luckyArray = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element % 13 !== 0) {
      luckyArray.push(element);
    }
  }
  return luckyArray;
}

const unlucky13 = (arr) =>
  arr.filter((num) => num % 13 !== 0);

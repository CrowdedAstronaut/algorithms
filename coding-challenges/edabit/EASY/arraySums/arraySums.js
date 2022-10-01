function arraySum(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element % 2 === 0) {
      newArray.push(Math.pow(element, 2));
    } else {
      newArray.push(Math.sqrt(element));
    }
  }
  return Number(newArray.reduce((a, b) => a + b).toFixed(2));
}

function arraySum(nums) {
  return Number(
    nums
      .map((x) => (x % 2 === 0 ? x ** 2 : Math.sqrt(x)))
      .reduce((x, y) => x + y, 0)
      .toFixed(2)
  );
}

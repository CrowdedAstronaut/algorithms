function maxSubArray(arr) {
  let maxSum = -Infinity;
  let currSum;
  for (let i = 0; i < arr.length; i++) {
    currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum += arr[j];
      if (maxSum < currSum) {
        maxSum = currSum;
      }
    }
  }
  function maxSubarray(nums) {
    let currSum = -Infinity;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      currSum = Math.max(0, currSum);
      currSum += nums[i];
      maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
  }
}

function maxSubArray(nums) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

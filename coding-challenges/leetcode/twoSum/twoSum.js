const twoSum = (nums, target) => {
  let array = nums.map((num) => Number(num));
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};

twoSum([3, 2, 4], 6);

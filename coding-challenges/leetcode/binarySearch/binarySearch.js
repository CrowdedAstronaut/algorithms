//Iterative approach is what I'm accustomed to
const search = (nums, target) => {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) array.push(i);
  }
  return array.length > 0 ? array[0] : -1;
};

//Recursive approach is faster because it doesn't start at the
//beginning of the data set.
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = nums[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

search([-1, 0, 3, 5, 9, 12], 9);

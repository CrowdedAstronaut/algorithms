const containsDuplicate = (nums) => {
  let unique = Array.from(new Set(nums));
  return unique.length !== nums.length;
};

containsDuplicate([1, 2, 3, 1]);

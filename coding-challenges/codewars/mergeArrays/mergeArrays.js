const mergeArrays = (arr1, arr2) => {
  let sorted = Array.from(new Set(arr1.concat(arr2)));
  return sorted.sort((a, b) => a - b);
};

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

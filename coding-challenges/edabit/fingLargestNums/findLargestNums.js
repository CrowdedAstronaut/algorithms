function findLargestNums(arr) {
  let maxArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    maxArray.push(Number(Math.abs(Math.max(element))));
  }
  return maxArray;
}

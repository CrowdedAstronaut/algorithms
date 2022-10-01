function secondLargest(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[1];
}

//Sort the array using merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  //divide the array into half and sort the left and right side
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  rightIndex = 0;
  while (
    leftIndex < left.length &&
    rightIndex < right.length
  ) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
function makeArrayConsecutive(statues) {
  statues = mergeSort(statues);
  return (
    statues[statues.length - 1] -
    statues[0] +
    1 -
    statues.length
  );
}

function makeArrayConsecutive2(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let first = sorted[0];
  let last = sorted[sorted.length - 1];
  let array = Array(last - first + 1)
    .fill()
    .map((_, idx) => first + idx);
  return array.length - sorted.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));

const migratoryBirds = (arr) => {
  let largest = 1;
  let counter = largest;
  let type = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1 >
      counter
    ) {
      counter = largest;
      type = arr[i];
    }
  }
  return type;
};
migratoryBirds([1, 4, 4, 4, 5, 3]);

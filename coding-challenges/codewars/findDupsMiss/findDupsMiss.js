function findDupsMiss(arr) {
  let array = Array.from(new Set(arr));
  console.log(array);
}

findDupsMiss([10, 9, 8, 9, 6, 1, 2, 4, 3, 2, 5, 5, 3]);

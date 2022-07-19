const removeEveryOther = (arr) => {
  return arr.filter((item, idx) => (idx + 1) % 2 !== 0);
};

console.log(
  removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

// function removeItemAll(arr, value) {
//   var i = 0;
//   while (i < arr.length) {
//     if (arr[i] === value) {
//     } else {
//       ++i;
//     }
//   }
//   return arr;
// }

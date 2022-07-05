function removeSmallest(numbers) {
  let returnArray = [...numbers];
  let smallest = Math.min(...numbers);
  let idx = returnArray.indexOf(smallest);
  returnArray.splice(idx, 1);
  return returnArray;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

// function removeSmallest(arr) {
//   let value = Math.min(...arr);
//   return arr.filter(function (ele) {
//     return ele != value;
//   });
// }

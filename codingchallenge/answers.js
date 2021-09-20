function findSingle(array) {
  // Do XOR of all elements and return
  let res = array[0];
  for (let i = 1; i < array.length; i++)
    res = res ^ array[i];

  return res;
}

// Driver code
let array = [2, 3, 5, 4, 5, 3, 4];

console.log(
  "Element occurring once is " + findSingle(array)
);

const choreAssignment = (chores) => {
  //Sort the original array in ascending order for sum comparison
  chores.sort((a, b) => a - b);
  //Create an empty array to push the sum of the pairs of chores
  sorted = [];
  //Setup a while loop conditional on the input array that does 3 things on each loop
  while (chores.length > 0) {
    //1. Pushes the sum of chores[0] and the last element
    sorted.push(chores[0] + chores[chores.length - 1]);
    //2. Deletes the first and last elements of chores which is our conditional
    chores.shift();
    chores.pop();
    //3. Keeps our new array sorted in ascending order
    sorted.sort((a, b) => a - b);
  }
  //When the while loop is empty, it exits, and we can return our newly sorted array.
  return sorted;
};
// console.log(
//   choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])
// );

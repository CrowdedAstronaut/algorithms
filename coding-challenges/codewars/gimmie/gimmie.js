const gimme = (triplet) =>
  //use indexOf to find the index of the middle element
  triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
//use the spread operator to create a copy of the original array and find the index
//of the element after it's been sorted.
console.log(gimme([2, 3, 1]));

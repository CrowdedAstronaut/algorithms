const numbers = [
  3, 44, 42, 54, 95, 2, 79, 23, 3, 92, 14, 35,
];

const insertionSort = (items) => {
  // Loop through each element
  let n = numbers.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = numbers[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < numbers[j]) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = current;
  }
  return numbers;
};
// Store the current item value so it can be placed correctly
// in the sorted portion of the array

// Loop backward through the sorted portion of the array
// until you find the right place to insert the value you're working with

// Copy each item to the next slot over

// We can now insert the item in its sorted location

// Remember to return the list!

console.log(insertionSort(numbers));

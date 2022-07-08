const numbers = [
  47, 31, 86, 43, 2, 85, 36, 14, 92, 63, 17, 11,
];

const bubbleSort = (items) => {
  let length = items.length,
    swapped = true,
    array = [],
    i;

  if (items) {
    array = items.map(function (item) {
      return item;
    });
  }

  while (swapped) {
    swapped = false;
    for (i = 1; i < length; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swapped = true;
      }
    }
  }

  return array;
};

console.log(bubbleSort(numbers));

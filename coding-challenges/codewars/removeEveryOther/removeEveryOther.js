const removeEveryOther = (arr) => {
  let empty = [];
  for (let i = 0; i <= arr.length; i += 2) {
    empty.push(arr[i]);
  }
  return empty;
};

console.log(
  removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

//Edabit Solution
const isOmnipresent = (arr, val) =>
  arr.every((x) => x.includes(val));

function isOmnipresent(arr, val) {
  const flatArr = arr.flat(Infinity);

  let count = 0;
  flatArr.forEach((num) => {
    if (num === val) count++;
  });

  return count >= 4 && count <= 8;
}

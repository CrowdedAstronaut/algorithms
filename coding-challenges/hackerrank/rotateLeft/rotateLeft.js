function rotateLeft(d, arr) {
  // Write your code here
  let x = (d -= arr.length * Math.floor(d / arr.length));
  arr.push.apply(arr, arr.splice(0, x));
  return arr;
}

console.log(rotateLeft([2, 1, 3, 10, 9, 5, 6, 7]));

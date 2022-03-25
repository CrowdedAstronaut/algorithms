function rotateLeft(d, arr) {
  // Write your code here
  d -= arr.length * Math.floor(d / arr.length);
  arr.push.apply(arr, arr.splice(0, d));
  return arr;
}

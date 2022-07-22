const { performance } = require("perf_hooks");

let startTime = new Date().getTime();
function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(0, -1).map((item, idx) => item * arr[idx + 1]));
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
let endTime = new Date().getTime();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
console.time(function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1];
  for (let i = 1; i < array.length; i++) {
    product = array[i] * array[i + 1];
    if (product > maxProduct) maxProduct = product;
  }
  return maxProduct;
});

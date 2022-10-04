function clone(arr) {
  arr.push(arr.slice(0));
  return arr;
}

console.log(clone([1, 2, 3]));

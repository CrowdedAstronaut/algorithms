const arr = (N) => {
  let array = [];
  for (let i = 0; i < N; i++) {
    array.push(i);
  }
  return array;
};

console.log(arr(4));

//other good answers - with an object
const objarr = (n) => Array.from({ length: n }, (_, i) => i);

//another good one using Array.from
const arrUsingArrayFrom = (n) => Array.from({ length: n }, (_, i) => i);

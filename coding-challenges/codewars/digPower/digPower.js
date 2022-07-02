function digPow(n, p) {
  let array = n.toString().split("");
  let magic = Math.pow(n, p);
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let k = parseInt(array[i]);
    result += Math.pow(k, p + i);
  }
  return result === magic
    ? p
    : result % n === 0
    ? result / n
    : -1;
  // ...
}

digPow(89, 1);

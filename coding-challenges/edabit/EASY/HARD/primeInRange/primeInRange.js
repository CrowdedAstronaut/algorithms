function primeInRange(n1, n2) {
  let first = n1;
  let last = n2;
  let array = Array(last - first + 1)
    .fill()
    .map((_, idx) => first + idx);
  let empty = [];
  function isPrime(num) {
    if (num == 2 || num == 3) return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;
    for (let i = 5; i * i <= num; i += 6)
      if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
  }
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i]) === true) empty.push(array[i]);
  }
  return empty.length > 0 ? true : false;
}

primeInRange(10, 15);

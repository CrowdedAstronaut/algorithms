function findDigits(n) {
  let array = n.toString().split("");
  let divisors = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) !== 0 && Number(array[i]) % Number(array[i]) === 0) {
      divisors++;
    }
  }
  return divisors;
}

console.log(findDigits(1012));

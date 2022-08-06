const findDigits = (n) => {
  let array = n.toString().split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (n % Number(array[i]) === 0) count++;
  }
  return count;
};

console.log(findDigits(124));

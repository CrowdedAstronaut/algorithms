const twoDigitSum = (n) => (n % 10) + Math.floor(n / 10);

function twoDigitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n -= n % 10;
    n /= 10;
  }
  return sum;
}

//Edabit Solution
const twoDigitSum = (n) => {
  const [tens, ones] = `${n}`;
  const result = +tens + +ones;

  return result;
};

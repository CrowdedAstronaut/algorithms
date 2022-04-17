const getSum = (a, b) =>
  a === b
    ? a
    : a > b
    ? a + getSum(a - 1, b)
    : a + getSum(a + 1, b);

//using Math.min & Math.max() - smart!
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

//I like this one too
function GetSum(a, b) {
  let result = 0;
  let bigger = a > b ? a : b;
  let smaller = a > b ? b : a;
  for (let i = smaller; i <= bigger; i++) {
    result += i;
  }
  return result;
}

//My solution
const arrayLessThan100 = (arr) =>
  arr.reduce((a, b) => a + b) < 100 ? true : false;

//Edabit Solution
function arrayLessThan100(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum < 100;
}

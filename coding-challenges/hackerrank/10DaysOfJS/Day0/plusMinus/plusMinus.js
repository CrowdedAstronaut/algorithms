let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let plus = [...arr].filter((item) => item > 0);
  let minus = [...arr].filter((item) => item < 0);
  let zero = [...arr].filter((item) => item === 0);
  console.log(plus / arr.length).toFixed(6);
  // console.log(minus / arr.length).toFixed(6);
  // console.log(zero / arr.length).toFixed(6);
}

console.log(plusMinus(arr));

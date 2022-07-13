// function mxdiflg(a1, a2) {
//   let max1 = Math.max(...a1.map((el) => el.length));
//   let max2 = Math.max(...a2.map((el) => el.length));
//   let min1 = Math.min(...a1.map((el) => el.length));
//   let min2 = Math.min(...a2.map((el) => el.length));
//   let maxArray = [max1, max2, min1, min2];
//   if (a1.length && a2.length > 0) {
//     return Math.max(...maxArray) - Math.min(...maxArray);
//   } else {
//     return -1;
//   }
// }

//question on hold - did not solve - 7/13/22

let arr1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];

let arr2 = [
  "cccooommaaqqoxii",
  "gggqaffhhh",
  "tttoowwwmmww",
];

console.log(mxdiflg(arr1, arr2));

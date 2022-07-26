//You are given an array of integers "numbers" and two integers
//"left" and "right". Your task is to calculate a boolean array result
//where result[i]=true if there exists an integer "x", such that
//numbers[i]=(i+1)*x and left <= x <= right. Otherwise result[i]
//should be set to false.

function leftAndRight(numbers, left, right) {
  let result = [];
  let x = 0;
  for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] === numbers[i] * (i + 1)) {
    x = numbers[i] / (i + 1);
    //
    if (x >= left && x <= right && Number.isInteger(x)) {
      result.push(true);
    } else {
      result.push(false);
    } // }
  }
  return result;
}

let numbers = [8, 5, 6, 16, 5];
let left = 1;
let right = 3;

console.log(leftAndRight(numbers, left, right));

const evenLast = (arr) => {
  let last = arr[arr.length - 1];
  const evenIndex = arr.filter((_, i) => i % 2 === 0);
  return evenIndex.reduce((acc, cv) => acc + cv * last, 0);
};

//Edabit Solution
function evenLast(arr) {
  let answer = 0;

  if (arr.length > 0) {
    arr.forEach(function (int, i) {
      if (i % 2 === 0) {
        answer += int;
      }
    });
    answer *= arr[arr.length - 1];
  } else {
    answer = 0;
  }
  return answer;
}

function evenLast(arr) {
  let sum = 0;
  const multiplicator = arr[arr.length - 1];
  arr.forEach((val, i) => {
    if (!(i % 2)) {
      sum += val * multiplicator;
    }
  });
  return sum;
}

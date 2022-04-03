function oddishOrEvenish(num) {
  let arr = num.toString().split("");
  let sum = 0;
  for (let i of arr) {
    sum += parseInt(i);
  }
  if (sum % 2 == 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}

function oddishOrEvenish(num) {
  let arr = num.toString().split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = Number(arr[i]);
    count += currentNumber;
  }
  return count % 2 === 0 ? "Evenish" : "Oddish";
}

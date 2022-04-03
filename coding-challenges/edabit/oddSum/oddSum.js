function oddSum(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] + numbers[i + 1]) % 2 === 0) {
      array.push(true);
    } else {
      array.push(false);
    }
  }
  array.pop();
  return array;
}

//Edabit tidy solution
const oddSum = (numbers) =>
  numbers.slice(1).map((n, i) => (n + numbers[i]) % 2 < 1);

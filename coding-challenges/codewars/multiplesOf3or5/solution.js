function solution(number) {
  let newArray = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      newArray.push(i);
    }
  }
  return number > 0 ? newArray.reduce((a, b) => a + b) : 0;
}

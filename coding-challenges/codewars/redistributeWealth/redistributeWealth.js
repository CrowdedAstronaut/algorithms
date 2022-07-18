const redistributeWealth = (wealth) => {
  let average =
    wealth.reduce((a, b) => a + b, 0) / wealth.length;
  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = average;
  }
};
console.log(redistributeWealth([5, 10, 6]));

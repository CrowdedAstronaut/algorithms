function redistributeWealth(wealth) {
  const average =
    wealth.reduce((a, b) => a + b) / wealth.length;
  let result = wealth.toString().replace(/[0-9]/g, average);
  return result;
}

console.log(redistributeWealth([5, 10, 6]));

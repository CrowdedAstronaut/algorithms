const calculate = (num1, num2, op) =>
  op === "+"
    ? num1 + num2
    : op === "-"
    ? num1 - num2
    : op === "*"
    ? num1 * num2
    : op === "/"
    ? num1 / num2
    : num1 % num2;

function calculate(num1, num2, op) {
  return {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num1 / num2,
    "%": num1 % num2,
  }[op];
}

function calc(x) {
  let total1 = [...x].map((char) => char.charCodeAt(...x));
  let total1String = total1.join("");
  let total1Sum = total1String
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b));
  // .reduce((a, b) => parseInt(a) + parseInt(b));
  // let total1Sum = total1String.reduce((a, b) => a + b);
  let total2Sum = total1String
    .replace("7", "1")
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b));
  // let total2Sum = total2.reduce((a, b) => a + b);
  // total2Sum = total2Array.reduce((a, b) => parseInt(a) + parseInt(b));
  return total2Sum;
}

console.log(calc("ABC"));

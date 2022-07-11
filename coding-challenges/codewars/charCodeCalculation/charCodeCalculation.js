function calc(x) {
  let ASCII = [...x]
    .map((char) => char.charCodeAt())
    .join("");
  let ASCIISum = [...ASCII]
    .map((character) => Number(character))
    .reduce((a, b) => a + b);
  let total2 = ASCII.replace(/7/g, "1");
  let total2Sum = [...total2]
    .map((character) => Number(character))
    .reduce((a, b) => a + b);
  return ASCIISum - total2Sum;
}

console.log(calc("ABC"));

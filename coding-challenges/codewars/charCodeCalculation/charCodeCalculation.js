function calc(x) {
<<<<<<< HEAD
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
=======
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
>>>>>>> dffd169 (Laptop commit)
}

console.log(calc("ABC"));

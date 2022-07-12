function numbersWithDigitInside(x, d) {
  //create an empty array to store the result.
  let result = [];
  //create a regular expression that matches a digit
  let REGEX = /[0-9]/g;
  for (let i = 0; i <= x; i++) {
    if (REGEX(d).test(i + "")) {
      result.push(i);
    }
    return result;
  }
}
console.log(numbersWithDigitInside[(5, 6)]);

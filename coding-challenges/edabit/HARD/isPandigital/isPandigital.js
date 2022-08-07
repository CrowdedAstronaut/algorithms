function isPandigital(num) {
  let int = num;
  let allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Getting the string as a parameter
  // and typecasting it into an integer
  let myFunc = (num) => Number(num);

  let intArr = Array.from(String(int), myFunc);
  let sorted = intArr.sort((a, b) => a - b);
  return Array.from(new Set(sorted)).join("") === allDigits.join("");
}

const isPandigital = (num) => {
  return new Set(num.toString().split("")).size === 10;
};
isPandigital(98140723568910);

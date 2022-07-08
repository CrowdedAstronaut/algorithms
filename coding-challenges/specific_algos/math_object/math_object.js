//NOTES
let cartTotal = 16.07;
let roundedUpCart = Math.round(cartTotal);
console.log(roundedUpCart); //16

let roundedUpCart2 = Math.ceil(cartTotal);
console.log(roundedUpCart2); //17

let donation = (roundedUpCart - cartTotal).toFixed(2);
console.log(donation);

// PROMPT 1
// Use a Math method to create a random number between 0 and 10 (including 10)
let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

// Print the value of your randomNumber a few times to make sure it's correct

// PROMPT 2
// Consider the array of numbers below. Use a Math method to store the minimum and maximum values in the variables below.
const myArray = [12, 6, 3, 7, 13, 8];
let min = Math.min(...myArray);
let max = Math.max(...myArray);
console.log(min, max);

// PROMPT 3
// Write a function called `getAbVal` that takes an array of numbers and returns a new array with the absolute value of each number
const secondArray = [12.5, 6.3, 3.2, 7.1, 13.5, 8.9];
const getAbVal = () => {
  return console.log(Math.abs(...secondArray));
};
getAbVal();

// PROMPT 4
// Write a function called `checkIfSquare` that takes a number and returns true if the number is a perfect square, and false if it is not
const checkIfSquare = (number) =>
  (number * number) % 2 === 0 ? true : false;

console.log(checkIfSquare(64));

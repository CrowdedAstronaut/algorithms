//Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
  return length * 2 + width * 2;
}

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
  return `something ${a}`;
}

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

//Create a function that takes the age in years and returns the age in days.
function calcAge(age) {
  return age * 365;
}

//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
  return minutes * 60;
}

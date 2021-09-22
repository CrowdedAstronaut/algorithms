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

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function squared(b) {
  return b * b;
}

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
  return a ** 3;
}

//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
  return (base * height) / 2;
}

function addition(a, b) {
  return a + b;
}

//Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
function printArray(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
  return x % y;
}

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
  return a ** 3;
}

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
  return x % y;
}

function and(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

function sumPolygon(n) {
  return (n - 2) * 180;
}

function checkEquality(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function swap(a, b) {
  return [b, a];
}

function nameString(name) {
  let b = "Edabit";
  let result = name + b;
  return result;
}

function footballPoints(wins, draws, losses) {
  let win = wins * 3;
  let draw = draws * 1;
  let loss = losses * 0;
  return win + draw + loss;
}

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

function greeting(name) {
  if (name == "Mubashir") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}

function makesTen(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
}

function animals(chickens, cows, pigs) {
  const numChicks = chickens * 2;
  const numCows = cows * 4;
  const numPigs = pigs * 4;

  return numChicks + numCows + numPigs;
}

function isSeven(x) {
  if (x == "7") {
    return true;
  }
  return false;
}

function maxNum(n1, n2) {
  if (n1 > n2) {
    return n2;
  } else {
    return n1;
  }
}

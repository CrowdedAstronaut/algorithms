const isPalindrome = (x) =>
  x == x.toString().split("").reverse().join("")
    ? true
    : false;

const addTwoNumbers = (l1, l2) => {
  let num1 = Number(l1.reverse().join(""));
  let num2 = Number(l2.reverse().join(""));
  let reverseList = String(num1 + num2)
    .split("")
    .reverse();
  return reverseList.map((item) => Number(item));
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

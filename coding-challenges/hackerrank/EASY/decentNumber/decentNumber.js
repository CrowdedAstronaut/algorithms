let printDecentNumber = function (arr) {
  console.log(arr.join(""));
};

let assembleDecentNumber = function (fives, threes) {
  let arr = [];
  for (i = 0; i < fives; i++) {
    arr.push(5);
  }
  for (i = 0; i < threes; i++) {
    arr.push(3);
  }
  return arr;
};

let calcDecentNumber = function (n) {
  let fives = n;
  let threes = 0;

  while (threes <= n) {
    if (fives % 3 === 0 && threes % 5 === 0) {
      return assembleDecentNumber(fives, threes);
    }
    threes += 5;
    fives -= 5;
  }
  return [-1];
};

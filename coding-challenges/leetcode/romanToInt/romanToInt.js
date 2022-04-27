const romanToInt = (s) => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = Array.from(s);
  const empty = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] == "I" &&
        (arr[i + 1] == "V" || arr[i + 1] == "X")) ||
      (arr[i] == "X" &&
        (arr[i + 1] == "L" || arr[i + 1] == "C")) ||
      (arr[i] == "C" &&
        (arr[i + 1] == "D" || arr[i + 1] == "M"))
    ) {
      empty.push(-obj[arr[i]]);
    } else {
      empty.push(obj[arr[i]]);
    }
  }
  const result = empty.reduce((curr, acc) => curr + acc);
  return result;
};

const romanToInt = (s) => {
  const characterMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const length = s.length;

  let sum = characterMap[s[length - 1]];

  for (let i = length - 2; i >= 0; i--) {
    if (characterMap[s[i]] < characterMap[s[i + 1]]) {
      sum -= characterMap[s[i]];
    } else {
      sum += characterMap[s[i]];
    }
  }

  return length == 0
    ? 0
    : length == 1
    ? characterMap[s[0]]
    : sum;
};

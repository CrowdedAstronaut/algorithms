//My solution
const stringPairs = (str) => {
  const pairs = [];

  for (let i = 0; i < str.length; i += 2) {
    let second =
      str[i + 1] === undefined ? "*" : str[i + 1];
    pairs.push(str[i] + second);
  }

  return pairs;
};

//Edabit solution
function stringPairs(str) {
  let array = [];
  let string = "";

  if (str.length % 2 !== 0) {
    str += "*";
  }

  for (let i = 0; i <= str.length; i++) {
    string += str[i];
    if (i % 2 !== 0) {
      array.push(string);
      string = "";
    }
  }

  return array;
}

//Edabit solution using substr()
function stringPairs(str) {
  let strPairsArr = [];

  for (let i = 0; i < str.length; i += 2) {
    strPairsArr.push(str.substr(i, 2));
  }

  if (str.length % 2 !== 0) {
    let lastPair = strPairsArr[strPairsArr.length - 1];

    lastPair = lastPair.concat("*");

    strPairsArr.pop();

    strPairsArr.push(lastPair);
  }

  return strPairsArr;
}

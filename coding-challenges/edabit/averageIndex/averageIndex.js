const averageIndex = (letters) => {
  const getCharIndex = (letter) => {
    let charIndex = letter.toLowerCase().charCodeAt(0) - 96;
    return charIndex;
  };

  let sumOfAllNumbers = letters.reduce((acc, cv) => acc + getCharIndex(cv), 0);
  let numberOfItems = letters.length;
  return +(sumOfAllNumbers / numberOfItems).toFixed(2);
};

//most upvoted Edabit solution
let averageIndex = (a) =>
  +(
    a.map((b) => b.charCodeAt(0) - 96).reduce((b, c) => b + c) / a.length
  ).toFixed(2);

//Edabit solution
function averageIndex(arr) {
  return Number(
    (
      arr.map((x) => x.charCodeAt(0) - 96).reduce((x, y) => x + y, 0) /
      arr.length
    ).toFixed(2)
  );
}

function averageIndex(arr) {
  let result =
    arr.map((val) => val.charCodeAt() - 96).reduce((acc, val) => acc + val) /
    arr.length;
  return Number(result.toFixed(2));
}

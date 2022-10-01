function checkTitle(title) {
  let words = title.split(" ");
  return words.every(
    (word) =>
      word.charAt(0) === word.charAt(0).toUpperCase()
  );
}

function checkTitle(title) {
  return title
    .split(" ")
    .every((item) => item[0] === item[0].toUpperCase());
}

function checkTitle(title) {
  let arr = title.split(" ").every(isUpperCase);
  return arr;
}
const isUpperCase = function (str) {
  let arr = str.split("");
  if (arr[0] === arr[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

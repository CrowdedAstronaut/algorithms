function spinWords(string) {
  let words = string.split(" ");
  return words
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

//Nice REGEX Solution
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}

//Map function using arrow syntax
function spinWords(str) {
  return str
    .split(" ")
    .map((word) => (word.length < 5 ? word : word.split("").reverse().join("")))
    .join(" ");
}

function position(letter) {
  const charCodeDifference = 96;
  const lowercase = letter.toLowerCase();
  const position =
    lowercase.charCodeAt() - charCodeDifference;
  return `Position of alphabet: ${position}`;
}

console.log(position("a"));

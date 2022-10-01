const numberSyllables = (word) => word.split("-").length;

function numberSyllables(word) {
  let count = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "-") {
      count += 1;
    }
  }
  return count;
}

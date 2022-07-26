const isPalindrome = (word) =>
  word === word.split("").reverse().join("");

// const strings = ["aaacodedoc", "codesignal"];

const palindromeCutting = (s) => {
  if (s.length < 2) {
    return "";
  }

  const { length } = s;
  let word = "";
  let index = 0;

  for (let i = 1; i < length; i++) {
    let sliced = s.slice(0, i + 1);

    if (
      isPalindrome(sliced) &&
      sliced.length > word.length
    ) {
      //   console.log(word, sliced.length, word.length);
      word = sliced;
      index = i;
    }
  }

  if (word.length < 2) {
    return s;
  }

  return palindromeCutting(s.slice(index + 1));
};

console.log(palindromeCutting("aaacodedoc"));

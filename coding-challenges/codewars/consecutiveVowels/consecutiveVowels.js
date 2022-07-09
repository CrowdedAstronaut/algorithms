function getTheVowels(word) {
  let vowels = "aeiou";
  let vowelsIndex = 0;
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === vowels[vowelsIndex]) {
      result++;
      if (vowelsIndex == 4) {
        vowelsIndex = 0;
      } else {
        vowelsIndex++;
      }
    }
  }
  return result;
}

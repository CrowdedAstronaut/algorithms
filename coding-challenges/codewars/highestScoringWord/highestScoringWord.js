function high(x) {
  // 1. split x by ' ' to an array.
  const wordList = x.split(" ");

  // 2. calculate each word score to another array.
  const getScore = (word) => {
    return word
      .split("")
      .reduce(
        (prevScore, currWord) =>
          prevScore + currWord.charCodeAt(0) - 96,
        0
      );
  };
  const scoreList = wordList.map((word) => getScore(word));

  // 3. get the highest score and index
  let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });

  // 4. return the string of the highest score index of wordList
  console.log(wordList[highestIndex]);
}

high("man i need a taxi up to ubud");

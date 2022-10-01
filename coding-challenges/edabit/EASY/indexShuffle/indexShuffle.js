function indexShuffle(str) {
  let evenIndexed = "";
  let oddIndexed = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (i % 2 === 0) {
      evenIndexed += element;
    } else {
      oddIndexed += element;
    }
  }
  return evenIndexed + oddIndexed;
}

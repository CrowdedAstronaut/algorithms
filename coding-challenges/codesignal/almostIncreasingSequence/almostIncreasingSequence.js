const almostIncreasingSequence = (sequence) => {
  let unwantedElements = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (
      sequence[i] >= sequence[i + 1] ||
      sequence[i] === sequence[i + 2]
    ) {
      unwantedElements++;
      if (unwantedElements > 1) {
        return false;
      }
    }
  }
  return true;
};
console.log(almostIncreasingSequence([1, 2, 1, 2]));

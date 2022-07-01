const highAndLow = (numbers) => {
  let numbersArray = numbers
    .split(" ")
    .map((number) => Number(number));

  return `${Math.max(...numbersArray)} ${Math.min(
    ...numbersArray
  )}`;
};

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

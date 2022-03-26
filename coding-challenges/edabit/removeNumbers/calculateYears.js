const calculateYears = (humanYears) => {
  // return humanYears, catYears, dogYears
  let catYears = 0;
  let dogYears = 0;

  for (let i = 0; i < humanYears; i++) {
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return humanYears === 1 || humanYears === 2
    ? [humanYears, catYears, dogYears]
    : [humanYears, catYears + 16, dogYears + 14];
};

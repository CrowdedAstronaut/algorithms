const countPositivesSumNegatives = (input) => {
  if (input === null || input.length < 1) {
    return [];
  }
  let positives = Array.from(input).filter(
    (value) => value > 0
  );
  let negatives = Array.from(input).filter(
    (value) => value < 0
  );
  if (negatives.length > 0) {
    let result = [
      positives.length,
      negatives.reduce((a, b) => a + b),
    ];
    return result;
  } else {
    return [];
  }
};

console.log(countPositivesSumNegatives(null));

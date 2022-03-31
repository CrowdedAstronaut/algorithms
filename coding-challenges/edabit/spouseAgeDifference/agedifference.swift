const ageDifference = (ages) => {
  let sortedArray = ages.sort((a, b) => b - a);
  return sortedArray[0] - sortedArray[1] === 0
    ? "No age difference between spouses."
    : sortedArray[0] - sortedArray[1] === 1
    ? `1 year`
    : `${sortedArray[0] - sortedArray[1]} years`;
};



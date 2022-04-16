function findOutlier(integers) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < integers.length; i++) {
    const element = integers[i];
    if (element % 2 === 0) {
      evenArray.push(element);
    } else {
      oddArray.push(element);
    }
  }
  return evenArray.length < oddArray.length
    ? Number(evenArray)
    : Number(oddArray);
}

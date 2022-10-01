function outlierNumber(arr) {
  let oddArray = [];
  let evenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  if (oddArray.length < evenArray.length) {
    return Number(oddArray);
  } else {
    return Number(evenArray);
  }
}

function cleanUpArray(arr) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      evenArray.push(Number(element));
    } else {
      oddArray.push(Number(element));
    }
  }
  console.log([evenArray, oddArray]);
}

cleanUpArray(["9", "4", "5", "8"]);

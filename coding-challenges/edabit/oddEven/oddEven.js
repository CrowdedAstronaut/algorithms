const oddeven = (arr) => {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      evenArray.push(element);
    } else {
      oddArray.push(element);
    }
  }
  return evenArray.length < oddArray.length ? true : false;
};

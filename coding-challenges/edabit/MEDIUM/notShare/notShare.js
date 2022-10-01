const notShare = (arr1, arr2) => {
  for (let i of arr1) {
    for (let j of arr2) {
      return i === j ? true : false;
    }
  }
};

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

//Edabit Solutions forEach()
function oddeven(arr) {
  let odd = 0;
  let even = 0;

  arr.forEach((num) => (num % 2 == 0 ? even++ : odd++));
  return odd > even;
}

//Edabit solution for .filter()
function oddeven(arr) {
  return arr.filter((ele) => ele % 2 !== 0).length > arr.length / 2;
}

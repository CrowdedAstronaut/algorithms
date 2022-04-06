//Edabit Solution
function arrIndex(arr, idx) {
  //Step 1 - Flatten the array 1 level
  arr = arr.flat();
  //Step 2 Map through the index array and join it
  return idx.map((x) => arr[x - 1]).join("");
}

function arrIndex(arr, idx) {
  let newArr = arr.flat();
  let answer = "";
  let trueIdx = [];
  for (item of idx) {
    trueIdx.push(item - 1);
  }
  for (let j = 0; j < idx.length; j++) {
    for (item in newArr) {
      if (item == trueIdx[j])
        answer = answer + newArr[item];
    }
  }
  return answer;
}

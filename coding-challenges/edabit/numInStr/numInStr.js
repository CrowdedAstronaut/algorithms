//Edabit solution 1

function numInStr(arr) {
  return arr.filter((item) => {
    for (char of item) {
      if (
        char.charCodeAt(0) > 47 &&
        char.charCodeAt(0) < 58
      ) {
        return item;
      }
    }
  });
}

function numInStr(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= "0" && arr[i][j] <= "9") {
        newArr.push(arr[i]);
        break;
      }
    }
  }
  return newArr;
}

//Regex solution
const numInStr = (arr) => arr.filter((x) => x.match(/\d/g));

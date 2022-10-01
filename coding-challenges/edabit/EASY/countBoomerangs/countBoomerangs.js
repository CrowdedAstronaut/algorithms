//My solution

const countBoomerangs = (arr) => {
  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log("i:" + i);
    if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) {
      //console.log("arr[i]: " + arr[i] + " & arr[i + 2]:" + arr[i + 2]);
      a.push(arr[i]);
      a.push(arr[i + 1]);
      a.push(arr[i + 2]);
      //console.log("a: " + a);
      b.push(a);
      //console.log("b:" + b);
      a = [];
    }
  }
  let c = b.length;
  return c;
};

//Edabit Solution
function countBoomerangs(arr) {
  return arr.reduce(
    (acc, e, index) => acc + (e === arr[index + 2] && e != arr[index + 1]),
    0
  );
}

//Edabit Solution
const countBoomerangs = (arr) => {
  let collection = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 2] && arr[i] != arr[i + 1]) {
      collection++;
    }
  }
  return collection;
};

//Edabit ForEach Solution
function countBoomerangs(arr) {
  boomCount = 0;
  arr.forEach((num, i) => {
    if (num === arr[i + 1]) return;
    if (num === arr[i + 2]) boomCount++;
  });
  return boomCount;
}

function equalizeArray(arr) {
  let dict = {};
  let key;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    key = arr[i];
    if (key in dict) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  for (let prop in dict) {
    if (dict[prop] > max) {
      max = dict[prop];
    }
  }
  console.log(arr.length - max);
  console.log(dict);
}

equalizeArray([3, 3, 2, 1, 3]);

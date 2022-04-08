const cmsSelector = (arr, str) => {
  let emptyArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.includes(str)) {
      emptyArray.push(element);
    }
  }
  return emptyArray.sort();
};

//Edabit one line solution with 3 methods stacked
let cmsSelectorOneLine = (a, s) =>
  a.filter((x) => x.includes(s)).sort();

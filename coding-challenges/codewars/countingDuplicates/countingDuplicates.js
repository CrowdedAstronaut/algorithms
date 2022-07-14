const duplicateCount = (text) => {
  let count = 0;
  let obj = {};
  let letters = text
    .split("")
    .map((item) => item.toLowerCase());
  letters.map((item) => (obj[item] = obj[item] + 1 || 1));
  for (let value of Object.values(obj)) {
    if (value > 1) {
      count++;
    }
  }
  return count;
};

console.log(duplicateCount("Indivisibilities"));

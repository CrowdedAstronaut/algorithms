const getFrequencies = (arr) => {
  let object = {};
  arr.map((item) => (object[item] = object[item] + 1 || 1));
  return object;
};

console.log(getFrequencies(["A", "B", "A", "A", "A"]));

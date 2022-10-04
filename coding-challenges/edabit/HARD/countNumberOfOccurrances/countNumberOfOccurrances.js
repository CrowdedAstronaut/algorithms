function countNumberOfOccurrences(obj) {
  let object = {};
  let array = Object.values(obj);
  array.map((item) => (object[item] = object[item] + 1 || 1));
  return object;
}

countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot",
});

const countNumberOfOccurrences = (obj) => {
  r = {};
  Object.values(obj).forEach((e) => {
    r[e] ? (r[e] += 1) : (r[e] = 1);
  });
  return r;
};

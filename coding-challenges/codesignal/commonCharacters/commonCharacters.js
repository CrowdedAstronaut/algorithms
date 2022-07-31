function solution(s1, s2) {
  let a1 = s1.split("").sort();
  let a2 = s2.split("").sort();
  let obj1 = {};
  let obj2 = {};
  let count = 0;

  a1.map((item) => (obj1[item] = obj1[item] + 1 || 1));
  a2.map((item) => (obj2[item] = obj2[item] + 1 || 1));
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (let key of keys1) {
    if (obj1[key] === obj2[key]) {
      count = obj1[key] + obj2[key];
    }
  }
  return count;
}

console.log(solution("abca", "xyzbac"));

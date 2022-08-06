function solution(a, b) {
  if (a.join("") === b.join("")) return true;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }
  arr2 = arr2.reverse().join("");
  arr1 = arr1.join("");
  if (arr2 === arr1) return true;
  return false;
}
solution(
  [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
);

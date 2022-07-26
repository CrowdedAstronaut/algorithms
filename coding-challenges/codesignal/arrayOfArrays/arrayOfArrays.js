// You are given an array of arrays "a". Your task is to group the arrays
// a[i] by their mean values, so that arrays with equal mean values are
// in the same group, and arrays with different mean values are in different
// groups.

// Each group should contain a set of indicies {i, j, etc.}, such that corresponding
// arrays (a[i], a[j], etc) all have the same mean. Return the set of groups
// as an array of arrays, where the indies within each group are sorted
// in ascending order, and the groups are sorted in ascending order of their
// minimum element.

function arrayOfArrays() {
  let empty = [];
  let arrays = a.map(
    (item) => item.reduce((a, b) => a + b) / item.length
  );
  for (let i = 0; i < arrays.length; i++) {
    for (let j = i + 1; j < arrays.length; j++) {
      if (arrays[i] === arrays[j]) {
        empty.push([i, j]);
      }
    }
  }
  return empty;

  //   let unique = Array.from(new Set(arrays));
  //   console.log(
  //     unique.map((item, idx) => arrays.findIndex(item))
  //   );
  //   console.log(unique);
  //   for (let i = 0; i < arrays.length; i++) {
  //     if (arrays[i] === arrays[i + 1]) {
  //       console.log(arrays[i]);
  //     }
  //   }
}

//sample input
a = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
];

//sample output
//[[0,4],[1],[2,3]]

console.log(arrayOfArrays(a));

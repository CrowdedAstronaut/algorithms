const isSubset = (a, b) => a.every((c) => b.includes(c));

console.log(isSubset([1, 2, 3, 4], [4, 3, 2, 1]));

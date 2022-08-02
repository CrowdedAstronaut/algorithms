function solution(a) {
  let needsSorting = [];
  let iValues = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) iValues.push(i);
    else needsSorting.push(a[i]);
  }
  needsSorting.sort((a, b) => a - b);
  for (let j = 0; j < needsSorting.length; j++) {
    needsSorting.splice(0, j, -1);
  }

  console.log(needsSorting);
}

a = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(solution(a));

function solution(a) {
  let group1 = [];
  let group2 = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) group1.push(a[i]);
    else group2.push(a[i]);
  }

  if (group2.length > 0)
    return [
      group1.reduce((a, b) => a + b),
      group2.reduce((a, b) => a + b),
    ];
  else return [group1.reduce((a, b) => a + b), 0];
}

solution([80]);

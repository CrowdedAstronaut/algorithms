function solution(a) {
  const sortedPeople = a
    .filter((item) => item != -1)
    .sort((a, b) => a - b);
  let i = -1;
  return a.map((value) => {
    if (value === -1) return -1;
    i++;
    return (a = sortedPeople[i]);
  });
}

a = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(solution(a));

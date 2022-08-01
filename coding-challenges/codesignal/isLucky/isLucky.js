function solution(n) {
  let array = String(n).split("");
  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(
    array.length / 2,
    array.length
  );

  console.log(firstHalf);
  console.log(secondHalf);
  return firstHalf.reduce(
    (a, b) => Number(a) + Number(b)
  ) == secondHalf.reduce((a, b) => Number(a) + Number(b))
    ? true
    : false;
}

console.log(solution(134008));

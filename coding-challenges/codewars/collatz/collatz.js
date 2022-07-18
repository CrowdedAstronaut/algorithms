// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
const collatz = (n) => {
  let empty = [];
  let input = n;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      empty.push(n);
    } else {
      n = 3 * n + 1;
      empty.push(n);
    }
  }
  return input === 1
    ? `${input}`
    : input + "->" + empty.join("->");
};

//AHHH this is the DEFINITION of RECURSION.
function collatz(n) {
  if (n === 1) return "1";
  return (
    n + "->" + collatz(n % 2 === 0 ? n / 2 : 3 * n + 1)
  );
}

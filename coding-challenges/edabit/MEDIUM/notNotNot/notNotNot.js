//My solution - CLEAN!

const notNotNot = (n, bool) => (n % 2 === 0 ? bool : !bool);

function notNotNot(n, bool) {
  let i = 0;
  while (i <= n) {
    bool = !bool;
    i++;
  }
  return !bool;
}

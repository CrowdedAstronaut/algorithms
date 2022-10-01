function combinations(items) {
  return [...arguments].reduce((acc, item) =>
    item === 0 ? acc : acc * item
  );
}

function combinations(items) {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    arr.push(arguments[i]);
  }
  if (arr.includes(0)) {
    arr[arr.indexOf(0)] = 1;
  }
  return arr.reduce((a, b) => a * b);
}

//My favorite Edabit solution
function combinations(items) {
  return Object.values(arguments).reduce(
    (a, b) => (b !== 0 ? a * b : a),
    1
  );
}

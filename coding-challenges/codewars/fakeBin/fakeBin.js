function fakeBin(x) {
  let array = x.split("");
  let empty = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element >= 5) {
      empty.push("1");
    } else {
      empty.push("0");
    }
  }
  return empty.join("");
}

//I like this codeWars solution
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

function spelling(str) {
  let array = [];
  for (let i = 1; i <= str.length; i++) {
    array.push(str.slice(0, i));
  }
  return array;
}

console.log(spelling("bee"));

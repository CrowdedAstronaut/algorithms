const capitals = (word) => {
  let array = word.split("");
  empty = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      empty.push(i);
    }
  }
  return empty;
};

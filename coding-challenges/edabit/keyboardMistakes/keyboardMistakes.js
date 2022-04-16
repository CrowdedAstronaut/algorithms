function keyboardMistakes(str) {
  let chars = { 4: "A", 5: "S", 0: "O", 1: "I" };
  return str.replace(/[4501]/g, (x) => chars[x]);
}

function divisibleByB(a, b) {
  let remainder = (a + b) % b;
  if (remainder === 0) return a;
  else return a + b - remainder;
}

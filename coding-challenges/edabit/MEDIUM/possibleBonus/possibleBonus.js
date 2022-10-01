const possibleBonus = (a, b) => {
  for (let i = 1; i <= 6; i++) {
    a += 1;
    if (a === b) {
      return true;
    }
  }
  return false;
};

//Edabit Solution
function possibleBonus(a, b) {
  const c = b - a;
  return c > 0 && c < 7;
}

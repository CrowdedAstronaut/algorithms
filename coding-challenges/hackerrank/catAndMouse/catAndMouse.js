//
function catAndMouse(x, y, z) {
  let distA = Math.abs(x - z);
  let distB = Math.abs(y - z);
  for (let i = 0; i < 10; i++) {
    if (distA === distB) {
      return "Mouse C";
    } else if (distA < distB) {
      return "Cat A";
    } else if (distA > distB) {
      return "Cat B";
    }
  }
}

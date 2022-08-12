// return the number of small chocolates required to achieve
// the desired goal. Return -1 if the goal cannot be achieved
// the desired goal. Return -1 if the goal cannot be achieved
function makeChocolates(small, big, goal) {
  for (let b = big; b >= 0; b--) {
    for (let s = small; s >= 0; s--) {
      if (b * 5 + s * 2 === goal) return s;
    }
  }
  return -1;
}
makeChocolates(4, 1, 13);

function maximumScore(tileHand) {
  return tileHand.reduce((p, c) => p + c.score, 1) - 1;
}

function maximumScore(tileHand) {
  let max = 0;
  tileHand.forEach(function (obj) {
    max += obj.score;
  });
  return max;
}

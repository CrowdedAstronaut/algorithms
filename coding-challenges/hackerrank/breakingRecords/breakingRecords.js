const breakingRecords = (scores) => {
  let best = 0;
  let worst = 0;
  let bestScore = scores[0];
  let worstScore = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > bestScore) {
      bestScore = scores[i];
      best++;
      continue;
    }
    if (scores[i] < worstScore) {
      worstScore = scores[i];
      worst++;
      continue;
    }
  }
  return [best, worst];
};

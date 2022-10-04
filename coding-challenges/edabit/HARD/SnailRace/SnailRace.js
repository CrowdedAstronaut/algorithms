function mauriceWins(mSnails, sSnails) {
  let round1 = [Math.min(...mSnails), Math.max(...sSnails)];
  let round2 = [mSnails[1], Math.min(...sSnails)];
  let round3 = [Math.max(...mSnails), sSnails[1]];

  if (
    (round1[0] > round1[1] && round2[0] > round2[1]) ||
    (round2[0] > round2[1] && round3[0] > round3[1]) ||
    (round1[0] > round1[1] && round3[0] > round3[1])
  )
    return true;
  else return false;
}

console.log(mauriceWins([3, 5, 10], [4, 7, 11]));

const mauriceWins = (mSnails, sSnails) => {
  let mediumRaceWin = mSnails[1] > sSnails[0];
  let fastestRaceWin = mSnails[2] > sSnails[1];

  return mediumRaceWin && fastestRaceWin;
};

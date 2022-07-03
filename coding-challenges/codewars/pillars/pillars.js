const pillars = (num_pill, dist, width) =>
  num_pill == 1 ? 0 : (num_pill - 2) * width + 100 * dist * (num_pill - 1);

function pillars(num_pill, dist, width) {
  if (num_pill < 2) return 0;
  const widthAllPillars = (num_pill - 2) * width;
  const distAll = (num_pill - 1) * (dist * 100);

  return distAll + widthAllPillars;
}

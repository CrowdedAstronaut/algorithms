function marathonDistance(d) {
  return d.reduce(
    (total, element) => total + Math.abs(element),
    0
  ) == 25
    ? true
    : false;
}

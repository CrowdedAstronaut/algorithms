function doesBrickFit(a, b, c, w, h) {
  return [a * b, a * c, b * c].some((el) => el <= w * h);
}

console.log(doesBrickFit(1, 2, 2, 1, 1));

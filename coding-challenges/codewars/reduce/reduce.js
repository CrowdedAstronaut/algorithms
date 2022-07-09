function reduce(fraction) {
  for (let i = fraction[0]; i > 0; i--) {
    if (0 == fraction[0] % i && 0 == fraction[1] % i) {
      let numerator = fraction[0] / i;
      let denominator = fraction[1] / i;
      return [numerator, denominator];
    }
  }
}

const reduce = (fraction) => {
  let g = gcd(fraction[0], fraction[1]);
  return [fraction[0] / g, fraction[1] / g]; //simplify me!
};

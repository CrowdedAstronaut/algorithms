function product(a, b) {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
}

function product(...a) {
  return (...b) => {
    return (...c) => {
      return c.reduce((s, v, i) => s + v * a[i] * b[i], 0);
    };
  };
}

const product = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

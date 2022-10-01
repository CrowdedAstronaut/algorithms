const mod = (a, b) => {
  let quotient = parseInt(a / b);
  let product = quotient * b;
  return Math.abs(product - a);
};

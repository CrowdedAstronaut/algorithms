const basicCalculator = (a, o, b) =>
  o === "+"
    ? a + b
    : o === "-"
    ? a - b
    : o === "/" && b !== 0
    ? a / b
    : o === "*"
    ? a * b
    : null;

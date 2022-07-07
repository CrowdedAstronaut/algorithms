const doubleChar = (str) =>
  str
    .split("")
    .map((item) => item + item)
    .join("");

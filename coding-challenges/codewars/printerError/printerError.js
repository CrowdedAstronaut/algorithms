const printerError = (s) => {
  //returning a fraction as a string
  //setup a regular expression to match that pattern - searches for those characters globally ignoring case
  let controlString = /[a-m]/gi;
  //denominator is equal to the length of the original string.
  let denominator = s.length;
  //numerator === total number of errors or s.length minus the control string
  let numerator = Math.abs(
    s.match(controlString).length - denominator
  );
  return `${numerator}/${denominator}`;
};

console.log(
  printerError(
    "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
  )
);

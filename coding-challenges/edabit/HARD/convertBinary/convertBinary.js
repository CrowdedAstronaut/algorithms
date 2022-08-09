function convertBinary(str) {
  let string = str;
  const zeroes = /[a-m]/gi;
  const ones = /[n-z]/gi;
  return string.replaceAll(zeroes, 0).replaceAll(ones, 1);
}

convertBinary("topsyTurvy");

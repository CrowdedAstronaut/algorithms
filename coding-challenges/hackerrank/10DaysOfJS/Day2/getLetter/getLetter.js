function getLetter(s) {
  let letter;
  const a_letters = "aeiou";
  const b_letters = "bcdfg";
  const c_letters = "hjklm";
  const d_letters = "npqrstvwxyz";

  if (a_letters.includes(s[0])) letter = "A";
  else if (b_letters.includes(s[0])) letter = "B";
  else if (c_letters.includes(s[0])) letter = "C";
  else letter = "D";

  return letter;
}

console.log(getLetter("adfgt"));

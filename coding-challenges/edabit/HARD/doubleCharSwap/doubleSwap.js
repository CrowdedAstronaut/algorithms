function doubleSwap(str, c1, c2) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1) {
      newstr += c2;
    } else if (str[i] === c2) {
      newstr += c1;
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}

doubleSwap("aabbccc", "a", "b");

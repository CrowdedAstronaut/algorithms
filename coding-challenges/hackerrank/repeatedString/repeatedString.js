function repeatedString(s, n) {
  let max = Math.ceil(n / s.length);
  let str = s.repeat(max).slice(0, n);

  return str.split("").filter((item) => item === "a").length;
}

repeatedString("aba", 10);

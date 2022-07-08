const getMiddle = (s) =>
  s.length % 2 !== 0
    ? s.charAt(s.length / 2)
    : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);

const makeRug = (m, n, s = "#") => {
  let arr = [];
  for (let i = 0; i < m; i++) arr.push(s.repeat(n));
  return arr;
};

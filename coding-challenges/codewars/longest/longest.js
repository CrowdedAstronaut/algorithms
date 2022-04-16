function longest(s1, s2) {
  // your code
  let first = Array.from(new Set(s1));
  let second = Array.from(new Set(s2));
  let unique = first + second;
  return Array.from(new Set(unique)).sort().slice().join("");
}

//Codewars solution
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

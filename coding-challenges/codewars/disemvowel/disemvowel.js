const disemvowel = (str) =>
  str.match(/[^aeiou]/gi).join("");

console.log(
  disemvowel(
    "No offense but,\nYour writing is among the worst I've ever read"
  )
);

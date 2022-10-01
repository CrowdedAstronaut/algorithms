function preventDistractions(str) {
  let arr = [
    "anime",
    "meme",
    "vine",
    "roasts",
    "Danny DeVito",
  ];
  return arr.some((x) => str.includes(x))
    ? "NO!"
    : "Safe watching!";
}

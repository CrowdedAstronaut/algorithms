function DNAStrand(dna) {
  //create an object with a character map
  let chars = { A: "T", T: "A", C: "G", G: "C" };
  //Use the REGEX method .replace() using the character map defined above
  reverse = dna.replace(/[ATCG]/g, (m) => chars[m]);
  return `${reverse}`;
}

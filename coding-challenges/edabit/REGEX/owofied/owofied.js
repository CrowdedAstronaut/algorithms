function owofied(sentence) {
  let chars = { i: "wi", e: "we" };

  sentence = sentence.replace(/[ie]/g, (m) => chars[m]);
  return `${sentence} owo`;
}

const REGEXP = /blue flag|red flag/g;

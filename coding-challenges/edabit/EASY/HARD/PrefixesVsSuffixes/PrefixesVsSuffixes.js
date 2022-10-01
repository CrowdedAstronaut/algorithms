function isPrefix(word, prefix) {
  let length = prefix.length;
  let nodash = prefix
    .split("")
    .splice(0, prefix.length - 1)
    .join("");
  let prefixCheck = word
    .split("")
    .splice(0, length - 1)
    .join("");
  return nodash === prefixCheck ? true : false;
}

function isSuffix(word, suffix) {
  let nodash = suffix.split("-");
  let suffixCheck = word.endsWith(nodash[1]);
  return suffixCheck;
}

console.log(isSuffix("movement", "-scope"));

const isPrefix = (word, prefix) =>
  word.startsWith(prefix.slice(0, -1));

const isSuffix = (word, suffix) =>
  word.endsWith(suffix.slice(1));

function vaporcode(string) {
  //1 - remove all spaces from the original string using REGEX
  let nospaces = string.replace(/\s+/g, "");

  return nospaces
    .split("")
    .map((letter) => letter.toUpperCase())
    .join("  ");
}

console.log(vaporcode("Lets go to the movies"));

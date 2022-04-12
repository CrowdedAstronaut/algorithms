function reverseWords(string) {
  let reverse = string.split(" ");
  return reverse.reverse().join(" ");
}

let reverseWords = (s) => s.split(" ").reverse().join(" ");

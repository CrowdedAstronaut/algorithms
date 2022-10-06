function shortcut(string) {
  const vowels = /[aeiou]/gi;
  return string.replace(vowels, "");
}
console.log(shortcut("hello"));

function charIndex(word, char) {
  return word.indexOf(char) === -1
    ? undefined
    : [word.indexOf(char), word.lastIndexOf(char)];
}

charIndex("hello", "l");

function firstVowel(str) {
  // any vowel - the i flag makes it case insensitive
  const vowels = /[aeiou]/i;
  return str.search(vowels);
}

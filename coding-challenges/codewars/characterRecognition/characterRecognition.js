function correct(inputString) {
  // organize the corrections in a human-readable object/map
  const corrections = {
    5: "S",
    0: "O",
    1: "I",
  };

  return (
    inputString
      // split the string into an array of characters
      .split("")
      // check if the current character is in the corrections object
      // if it is, correct it, else return it unchanged
      .map((char) =>
        corrections.hasOwnProperty(char)
          ? corrections[char]
          : char
      )
      // join the array of characters to a string
      .join("")
  );
}

correct = (s) =>
  s
    .replace(/0/g, "O")
    .replace(/1/g, "I")
    .replace(/5/g, "S");

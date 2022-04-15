const isPangram = (string) => {
  const strUpper = string.toUpperCase();
  // start at A
  for (let i = 65; i <= 90; i++) {
    if (!strUpper.includes(String.fromCharCode(i))) {
      return false;
    }
  }
  return true;
};

//Pretty nice REGEX solution - learn this pattern
function isPangram(string) {
  return (
    (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26
  );
}

//Also nice solution using .every()
function isPangram(string) {
  const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];

  return alphabetList.every((letter) =>
    string.toLowerCase().includes(letter)
  );
}

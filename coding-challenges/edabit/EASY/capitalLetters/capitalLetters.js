function capitalLetters(str) {
  let upperCaseArray = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == element.toUpperCase()) {
      upperCaseArray.push(element);
    }
  }
  return upperCaseArray.length;
}

//number one Edabit solution
const capitalLetters = (txt) =>
  txt.split(/[A-Z]/).length - 1;

//number two Edabit solution
const capitalLetters = (s) => {
  return [...s].filter((v) => v === v.toUpperCase()).length;
};

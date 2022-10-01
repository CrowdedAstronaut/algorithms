//Using Regex

const removeNumbers = (str) => str.replace(/[0-9]/g, "");

const removeNumbersWithoutRegex = (str) =>
  str
    .split("")
    .filter((item) => isNaN(item))
    .join("");

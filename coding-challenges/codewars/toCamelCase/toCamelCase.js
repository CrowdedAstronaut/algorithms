function toCamelCase(str) {
  str = str.split("");
  return str
    .map(function (element, index) {
      if (element == "-" || element == "_") {
        element = str[index + 1].toUpperCase();
        str.splice(index + 1, 1);
      }
      return element;
    })
    .join("");
}
toCamelCase("The_stealth_warrior");

const toCamelCase = (str) => {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
};

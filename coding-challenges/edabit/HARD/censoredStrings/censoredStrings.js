function uncensor(str, vowels) {
  const arr = [...vowels];
  return [...str]
    .map((element) =>
      element === "*" ? arr.shift() : element
    )
    .join("");
}

const uncensor = (str, vowels) => {
  while (vowels) {
    str = str.replace(/\*/, vowels[0]);
    vowels = vowels.slice(1);
  }
  return str;
};

function uncensor2(str, vowels) {
  str = str.split("");
  vowels = vowels.split("");
  for (let i = 0; i < vowels.length; i++) {
    str[str.indexOf("*")] = vowels[i];
  }
  return str.join("");
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

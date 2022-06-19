function reverseCase(str) {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === element.toUpperCase()) {
      array.push(element.toLowerCase());
    } else {
      array.push(element.toUpperCase());
    }
  }
  return array.join("");
}

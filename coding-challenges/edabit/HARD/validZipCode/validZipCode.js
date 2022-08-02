function isValid(zip) {
  let REGEX = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return REGEX.test(zip);
}

console.log(isValid("59001"));

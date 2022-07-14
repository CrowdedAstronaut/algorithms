function validatePIN(pin) {
  const fourDigits = /^[0-9]{4}$/;
  const sixDigits = /^[0-9]{6}$/;
  return fourDigits.test(pin) || sixDigits.test(pin);
}

console.log(validatePIN("123"));

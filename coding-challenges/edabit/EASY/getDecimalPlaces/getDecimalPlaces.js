function getDecimalPlaces(num) {
  return num.includes(".") ? num.split(".")[1].length : 0;
}

function highLow(str) {
  let nums = str.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

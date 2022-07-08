function uniqueInOrder(iterable) {
  let strArr = Array.isArray(iterable)
    ? iterable
    : iterable.split("");
  let unique = strArr.filter((letter, i) => {
    return strArr[i] != strArr[i + 1];
  });

  return unique;
}

function index(array, n) {
  let length = array.length - 1;
  if (n > length) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

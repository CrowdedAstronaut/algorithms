function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let magicDistance = x2 - x1;
  if (magicDistance % (v2 - v1) === 0 && v1 > v2) {
    return "YES";
  } else {
    return "NO";
  }
}

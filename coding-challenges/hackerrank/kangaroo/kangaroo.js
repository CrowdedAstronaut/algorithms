function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let magicDistance = x2 - x1;
  if (magicDistance % (v2 - v1) === 0 && v1 > v2) {
    return "YES";
  } else {
    return "NO";
  }
}

const kangaroo = (x1, v1, x2, v2) => {
  let jump = (x2 - x1) / (v2 - v1);
  if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) return "NO";

  return jump % 1 === 0 ? "YES" : "NO";
};

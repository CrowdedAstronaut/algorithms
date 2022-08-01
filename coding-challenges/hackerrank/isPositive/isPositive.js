function isPositive(a) {
  if (a > 0) return "YES";
  else if (a === 0) throw new UserException("Zero Error");
  else if (a < 0) throw new UserException("Zero Error");
}

console.log(isPositive(0));

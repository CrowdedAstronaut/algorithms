function stupidAddition(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return Number(a) + Number(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return String(a) + String(b);
  } else {
    return null;
  }
}

//Really nice Edabit solution
const stupidAddition = (a, b) => {
  if (typeof a !== typeof b) return null;
  if (typeof a === "string") return Number(a) + Number(b);
  return `${a}${b}`;
};

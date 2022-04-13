function isPositiveDominant(a) {
  let uniqueArray = Array.from(new Set(a));
  let otherUniqueArray = [...new Set(a)];
  let positive = [];
  let negative = [];
  for (let i = 0; i < uniqueArray.length; i++) {
    const element = uniqueArray[i];
    if (element < 0) {
      negative.push(element);
    } else if (element > 0) {
      positive.push(element);
    }
  }
  return positive.length > negative.length ? true : false;
}

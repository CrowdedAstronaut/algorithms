function evenOddString(txt) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < txt.length; i++) {
    const element = txt[i];
    if (i % 2 === 0) {
      evenArray.push(element);
    } else {
      oddArray.push(element);
    }
  }
  return `${evenArray.join("")} ${oddArray.join("")}`;
}
